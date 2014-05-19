from ..models import SearchTerm, Variable, Equation, Unit, QueryLog
from django.utils import timezone
from django.db.models import Q
from itertools import chain
from smartpq import SmartPQ
from copy import copy
import string
import operator
import re

# prefetch lists
__VAR_PREFETCH = ['variable_set__equation_set', 'variable_set__units_links', 
    'variable_set__definition', 'variable_set__search_terms']
__EQ_PREFETCH = ['equation_set', 'equation_set__variables', 
    'equation_set__defined_var', 'equation_set__search_terms']
__UNIT_PREFETCH = ['unit_set', 'unit_set__variable_set', 
    'unit_set__composition_links','unit_set__search_terms']


def find_results(query):
    """ Master function called by the Search view to start the process """
    # remove all trailing punctuation EXCEPT right paren/bracket/brace
    # factorials shouldn't be a problem at this time. If they become one, we can
    # modify this.
    query = rm_external_punct(query)
    log_search(query)
    if any(sym in query for sym in ['=','+','<','>']):
        return equation_exclusive_search(query)
    else:
        return general_search(query)


def rm_external_punct(sequence):
    """ remove all leading or trailing punctuation except appropriate parens """
    return re.sub(r'^[^\w&^\(&^\[&^\{]+|[^\w&^\)&^\]&^\}]+$', '', sequence)


def equation_exclusive_search(query):
    """ Since there are math characters in the query, we don't have to waste
        time querying other models. We can just check equations. """
    # our equations should not have spaces or stars. Underscores and parens may
    # occur, but there should be a SearchTerm in the database with parens and
    # underscores stripped. For edge cases, we include those queries anyway
    init_predicate_strings = predicate_string_set(query)
    eq_operator_split = lambda q: re.split(r'[=+\-*/^<>]+', q)
    predicate_strings = copy(init_predicate_strings)
    for q_string in init_predicate_strings:
        for component in eq_operator_split(q_string):
            predicate_strings.add(component)
    predicates = [Q(term__icontains=s) for s in predicate_strings]
    term_results = SearchTerm.objects.filter(reduce(operator.or_, predicates))\
                                             .prefetch_related(*__EQ_PREFETCH)
    if not term_results.count():
        # using .count() so that we don't evaluate the queryset if not needed
        return None
    dataQ = SmartPQ() # custom priority queue for O(1) lookup!
    any_in_set = lambda fcn, set_: any(fcn(q) for q in set_)
    for t in term_results:
        for eq in t.equation_set.all():
            to_add = eq
            if eq.is_definition():
                to_add = eq.defined_var
            if dataQ.has_value(to_add):
                continue
            eqname = eq.quick_name
            l_eqname = eqname.lower()
            # don't bother checking full_names since we know we have math text.
            # full_names do not contain math.
            # PRIORITY 0: quick name exact match for any in basic string set
            if any_in_set(lambda q: q == eqname, init_predicate_strings):
                dataQ.put((0, to_add))
            # PRIORITY 1: same as 0, but case insensitive
            elif any_in_set(lambda q: q.lower() == l_eqname, init_predicate_strings):
                dataQ.put((1, to_add))
            # PRIORITY 2: alternative name case insensitive match
            elif any(any_in_set(lambda q: q.lower() == alt.term.lower(),
                     init_predicate_strings) for alt in eq.search_terms.all() if 
                     alt.term != eqname):
                dataQ.put((2, to_add))
            # expand modified query set to components of operator splits
            # PRIORITY 3: substrings of quick_names
            elif any_in_set(lambda q: q.lower() in l_eqname, predicate_strings):
                dataQ.put((3, to_add))
            # PRIORITY 4: substrings of altnames
            elif any(any_in_set(lambda q: q.lower() in alt.term.lower(), 
                     predicate_strings) for alt in eq.search_terms.all() if 
                     alt.term != eqname):
                dataQ.put((4, to_add))
            # PRIORITY 5: anything else caught in our database query
            else:
                dataQ.put((5, to_add)) 
    return dataQ.ordered_list()


def predicate_string_set(query):
    """ Get a basic set of predicate strings for general purposes. These may
        not be enough, but they are necessary. """
    query_no_punct = query.encode('utf8')\
        .translate(string.maketrans("",""), string.punctuation)
    query_no_punct_spaces = query_no_punct.replace(" ","")
    query_no_spaces_stars = query.replace(" ","").replace("*","")
    query_no_paren = query_no_spaces_stars.replace("(","").replace(")","")
    query_no_underscore = query_no_spaces_stars.replace("_","")
    query_no_paren_underscore = query_no_paren.replace("_","")
    return set([query, query_no_punct, query_no_punct_spaces, 
        query_no_spaces_stars, query_no_paren, query_no_underscore, 
        query_no_paren_underscore])


def general_search(query):
    """ Queries of full equations should not call this, but we won't catch
        pieces of an equation without '=', '+', lt, or gt, so we have to 
        account for those. An icontains filter ought to cover it. """
    predicates = [Q(term__icontains=s) for s in predicate_string_set(query)]
    term_results = SearchTerm.objects.filter(reduce(operator.or_, predicates))\
       .prefetch_related(*chain(__VAR_PREFETCH, __EQ_PREFETCH, __UNIT_PREFETCH))
    if not term_results.count():
        return None
    dataQ = SmartPQ()
    for t in term_results:
        for obj in list(chain(t.variable_set.all(), 
                              t.equation_set.all(), 
                              t.unit_set.all())):
            investigate_object(obj, query, dataQ)
    return dataQ.ordered_list()


def investigate_object(obj, query, dataQ):
    """ Iterate through DB query results and add them to a priority queue """
    to_add = obj
    if obj.is_eq():
        if obj.is_definition():
            to_add = obj.defined_var
    if dataQ.has_value(to_add):
        return None
    # PRIORITY 0/1: Matches quick_name exactly or full_name case insensitive
    #               Variables before units and equations
    elif obj.quick_name == query or obj.full_name.lower() == query.lower():
        if to_add.is_var():
            dataQ.put((0, to_add))
        else:
            dataQ.put((1, to_add))
    # PRIOIRTY 2: quick_name matches case insensitive
    elif obj.quick_name.lower() == query.lower():
        dataQ.put((2, to_add))
    # PRIORITY 3: case insensitive match to alternative name
    elif (query.lower() in {x.term.lower() for x in to_add.search_terms.all() if
                            x.term != to_add.quick_name and 
                            x.term != to_add.full_name}):
        dataQ.put((3, to_add))
    # PRIORITY 4: full name substrings
    elif (query.lower() in obj.full_name.lower() or
          obj.full_name.lower() in query.lower()):
        dataQ.put((4, to_add))
    # PRIORITY 5: anything else caught in our database query
    else:
        dataQ.put((5, to_add))


def log_search(query_string):
    """ Keep track of the search for our own benefit. Requires 3 database
        queries for an update and 2 for an initialization. This seems okay
        for now. """
    log = QueryLog.objects.get_or_create(query=query_string,
        defaults={'count': 1, 'most_recent_lookup': timezone.now()})
    if not log[1]: 
        log[0].count += 1
        log[0].most_recent_lookup = timezone.now()
        log[0].save()
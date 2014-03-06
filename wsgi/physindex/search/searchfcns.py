from models import SearchTerm, Variable, Equation, Unit, QueryLog
from django.utils import timezone
from django.core.exceptions import ObjectDoesNotExist
from django.db.models import Q
from itertools import chain
import string
import operator

"""
Data bin priorities are established based on the following:

For Variables:
0: Matches quick_name, including case OR matches full_name exactly, not including case
2: Matches quick_name, not including case
3: Matches alternative names
4: Is a substring of full_name, or full_name is a substring
5: contains the query, and that's it

For Equations:
1: Matches quick_name, including case OR matches full_name exactly, not including case
2: One side of the equation matches one side of the other equation (in quick_names)
3: Matches alternative names
4: Is a substring of full_name, or full_name is a substring
5: contains the query, and that's it

For Units:
1: Matches quick_name, including case OR matches full_name exactly, not including case
2: Matches quick_name, not including case
3: Matches alternative names
4: Is a substring of full_name, or full_name is a substring
5: contains the query, and that's it
"""

class BinArray:
    """
    Contains a list of sets that prioritizes the results into
    bins based on relevance to search. Checking if an item is
    in the BinArray operates in constant time.
    """
    def __init__(self, size):
        self.container = [set() for _ in range(size)]
        self.collection = set()

    def put_in_bin(self, item, bin):
        self.container[bin].add(item)
        self.collection.add(item)

    def as_list(self):
        """Get all the items as a list, in order of bin."""
        return [item for bin in self.container for item in bin]

    def in_a_bin(self, item):
        if item in self.collection: return True
        return False


def find_results(query):
    query = query.strip()
    log_search(query)
    """
    if quasi_equation(query):
        return equation_exclusive_search(query)
    else:
        return general_search(query)
    """
    return general_search(query)


def multiquery_search(query):
    query_no_punct = query.encode('utf8').translate(string.maketrans("",""), string.punctuation)
    queryset_list = []

    # CASE 1: QUICK NAMES EXACT AND FULL NAMES I-EXACT MATCH
    c1_predicates = [Q(quick_name=query),
                     Q(quick_name=query_no_punct),
                     Q(full_name__iexact=query),
                     Q(full_name__iexact=query_no_punct)]

    queryset_list.append(variable_filter(c1_predicates))
    queryset_list.append(equation_filter(c1_predicates))
    queryset_list.append(unit_filter(c1_predicates))

    # CASE 2: QUICK NAMES I-MATCH


    # CASE 3: FULL NAME SUBSTRING MATCH

    # CASE 4: ALTERNATIVE NAME SUBSTRING MATCH

    # CASE 5: ANYTHING ELSE

    return list(chain(*[q for q in queryset_list if q]))


def variable_filter(predicates):
    return Variable.objects.filter(reduce(operator.or_, predicates))\
                                   .prefetch_related('equation_set')\
                                   .prefetch_related('units_links')\
                                   .prefetch_related('cited')\
                                   .prefetch_related('definition')


def equation_filter(predicates):
    return Equation.objects.filter(reduce(operator.or_, predicates))\
                                   .prefetch_related('variables')\
                                   .prefetch_related('defined_var')\
                                   .prefetch_related('cited')


def unit_filter(predicates):
    return Unit.objects.filter(reduce(operator.or_, predicates))\
                                   .prefetch_related('variable_set')\
                                   .prefetch_related('composition_links')\
                                   .prefetch_related('cited')


def general_search(query):
    term_results = query_db(query)
    if not term_results.count():
        return None
    data_bins = BinArray(7)
    for t in term_results:
        investigate_vars(t, query, data_bins)
        investigate_eqs(t, query, data_bins)
        investigate_units(t, query, data_bins)
    return data_bins.as_list()


def equation_exclusive_search(query):
    term_results = query_db


def query_db(query):
    query_no_punct = query.encode('utf8').translate(string.maketrans("",""), string.punctuation)
    query_no_spaces = query.replace(" ","")
    query_no_stars = query.replace("*","")
    query_no_paren = query_no_stars.replace("(","").replace(")","")
    query_no_underscore = query.replace("_","")
    return SearchTerm.objects.filter(Q(term__icontains=query) | 
                                     Q(term__icontains=query_no_punct) |
                                     Q(term__icontains=query_no_stars) | 
                                     Q(term__icontains=query_no_spaces) | 
                                     Q(term__icontains=query_no_paren) |
                                     Q(term__icontains=query_no_underscore))\
                                     .prefetch_related('equation_set',
                                                       'equation_set__variables',
                                                       'equation_set__defined_var',
                                                       'equation_set__cited',
                                                       'equation_set__search_terms',
                                                       'variable_set',
                                                       'variable_set__equation_set',
                                                       'variable_set__units_links',
                                                       'variable_set__cited',
                                                       'variable_set__definition',
                                                       'variable_set__search_terms',
                                                       'unit_set',
                                                       'unit_set__variable_set',
                                                       'unit_set__composition_links',
                                                       'unit_set__cited',
                                                       'unit_set__search_terms')


def result_sort(obj, query):
    if obj.quick_name == query or obj.full_name.lower() == query.lower():
        if type(obj) is Variable:
            return 0
        else:
            return 1
    elif obj.quick_name.lower() == query.lower():
        return 2


def investigate_vars(t, query, data_bins):
    vars_for_term = t.variable_set.all()
    for v in vars_for_term:
        if data_bins.in_a_bin(v): continue
        # case 0
        if v.quick_name == query or v.full_name.lower() == query.lower():
            data_bins.put_in_bin(v, 0)
        # case 1
        elif v.quick_name.lower() == query.lower():
            data_bins.put_in_bin(v, 1)
        # case 2
        elif len(v.units_links.all()) == 1:
            for u in v.units_links.all():
                if u.quick_name.lower() == query.lower() or u.full_name.lower() == query.lower():
                    data_bins.put_in_bin(v, 2)
        # case 4
        elif query.lower() in v.full_name.lower() or v.full_name.lower() in query.lower():
            data_bins.put_in_bin(v, 4)
        # case 5
        elif matches_a_unit(query, v):
            data_bins.put_in_bin(v, 5)
        # case 3. Execute this last, because quick_name and full_name are in search_terms 
        elif query.lower() in [x.term.lower() for x in v.search_terms.all()]:
            data_bins.put_in_bin(v, 3)
        # case 6
        else:
            data_bins.put_in_bin(v, 6)


# for equations, we only need to check against quick_name, full_name, and search_terms.
def investigate_eqs(t, query, data_bins):
    if "=" in query:
        sides = query.strip().split("=")
    else:
        sides = [query]
    eqs_for_term = t.equation_set.all()
    for e in eqs_for_term:
        if not e.is_definition() and not data_bins.in_a_bin(e):
            # case 1
            if query.lower() == e.full_name.lower() or query == e.quick_name:
                data_bins.put_in_bin(e, 1)
            # case 2
            elif check_sides(sides, e.quick_name.split("=")):
                data_bins.put_in_bin(e, 2)
            # case 4
            elif query.lower() in e.full_name.lower() or e.full_name.lower() in query.lower():
                data_bins.put_in_bin(e, 4)
            # case 3
            elif query.lower() in [x.term.lower() for x in e.search_terms.all()]:
                data_bins.put_in_bin(e, 3)
            # case 6
            else:
                data_bins.put_in_bin(e, 6)


def investigate_units(t, query, data_bins):
    units_for_term = t.unit_set.all()
    for u in units_for_term:
        if data_bins.in_a_bin(u): continue
        # case 1
        if u.quick_name == query or u.full_name.lower() == query.lower():
            data_bins.put_in_bin(u, 1)
        # case 2
        elif u.quick_name.lower() == query.lower():
            data_bins.put_in_bin(u, 2)
        # case 4
        elif query.lower() in u.full_name.lower() or u.full_name.lower() in query.lower():
            data_bins.put_in_bin(u, 4)
        # case 3. Execute this last, because quick_name and full_name are in search_terms 
        elif query.lower() in [x.term.lower() for x in u.search_terms.all()]:
            data_bins.put_in_bin(u, 3)
        # case 6
        else:
            data_bins.put_in_bin(u, 6)


def matches_a_unit(query, var):
    var_unit_links = var.units_links.all()
    for u in var_unit_links:
        if query.lower() == u.quick_name.lower() or query.lower() == u.full_name.lower():
            return True
    return False


# if the search has an equal sign, see if either side matches to the Equation object
def check_sides(term_sides, equation_sides):
    for eq_side in equation_sides:
        for term_side in term_sides:
            if eq_side.lower() == term_side.lower():
                return True
    return False


# if it looks like an equation, we don't need to check vars and units
def quasi_equation(query):
    for mark in ['=','+','>','<']:
        if mark in query:
            return True
    return False    


# logs the search as a QueryLog object
def log_search(query_string):
    log = QueryLog.objects.get_or_create(query=query_string, defaults={'count': 1, 'most_recent_lookup': timezone.now()})
    if not log[1]: 
        log[0].count += 1
        log[0].most_recent_lookup = timezone.now()
        log[0].save()
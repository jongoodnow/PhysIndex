from models import SearchTerm, Variable, Equation, Unit, QueryLog
from django.utils import timezone
from django.core.exceptions import ObjectDoesNotExist
from django.db.models import Q
import string

"""
Data bin priorities are established based on the following:

For Variables:
0: Matches quick_name, including case OR matches full_name exactly, not including case
1: Matches quick_name, not including case
2: Matches units exactly
3: Matches alternative names
4: Is a substring of full_name, or full_name is a substring
5: Matches some unit
6: contains the query, and that's it

For Equations:
1: Matches quick_name, including case OR matches full_name exactly, not including case
2: One side of the equation matches one side of the other equation (in quick_names)
3: Matches alternative names
4: Is a substring of full_name, or full_name is a substring
6: contains the query, and that's it

For Units:
1: Matches quick_name, including case OR matches full_name exactly, not including case
2: Matches quick_name, not including case
3: Matches alternative names
4: Is a substring of full_name, or full_name is a substring
6: contains the query, and that's it
"""

def find_results(query):
    # log the search first
    log_search(query)
    # gather relevant SearchTerm objects
    query_less_punct = query.encode('utf8').translate(string.maketrans("",""), string.punctuation)
    query_words = query.split()
    term_results = SearchTerm.objects.filter(Q(term__icontains=query) | Q(term__icontains=query_less_punct))
    if not term_results:
        return []
    # initialize data structure that splits results by priority
    data_bins = [set() for _ in range(7)]
    # keep track of items that are already in bins
    collection = set()
    # put the results where they belong
    for t in term_results:
        investigate_vars(t, query, data_bins, collection)
        investigate_eqs(t, query, data_bins, collection)
        investigate_units(t, query, data_bins, collection)
    # get the results ready by organizing data_bins into a list
    return [item for bin in data_bins for item in bin]

def investigate_vars(t, query, data_bins, collection):
    vars_for_term = t.variable_set.all()
    for v in vars_for_term:
        if v in collection:
            continue
        # case 0
        if v.quick_name == query or v.full_name.lower() == query.lower():
            data_bins[0].add(v)
            collection.add(v)
        # case 1
        elif v.quick_name.lower() == query.lower():
            data_bins[1].add(v)
            collection.add(v)
        # case 2
        elif len(v.units_links.all()) == 1:
            for u in v.units_links.all():
                if u.quick_name.lower() == query.lower() or u.full_name.lower() == query.lower():
                    data_bins[2].add(v)
                    collection.add(v)
        # case 4
        elif query.lower() in v.full_name.lower() or v.full_name.lower() in query.lower():
            data_bins[4].add(v)
            collection.add(v)
        # case 5
        elif matches_a_unit(query, v):
            data_bins[5].add(v)
            collection.add(v)
        # case 3. Execute this last, because quick_name and full_name are in search_terms 
        elif query.lower() in [x.term.lower() for x in v.search_terms.all()]:
            data_bins[3].add(v)
            collection.add(v)
        # case 6
        else:
            data_bins[6].add(v)
            collection.add(v)

# for equations, we only need to check against quick_name, full_name, and search_terms.
def investigate_eqs(t, query, data_bins, collection):
    if "=" in query:
        sides = query.strip(" ").split("=")
    else:
        sides = [query]
    eqs_for_term = t.equation_set.all()
    for e in eqs_for_term:
        if not e.is_definition() and e not in collection:
            # case 1
            if query.lower() == e.full_name.lower() or query.strip(" ") == e.quick_name:
                data_bins[1].add(e)
                collection.add(e)
            # case 2
            elif check_sides(sides, e.quick_name.split("=")):
                data_bins[2].add(e)
                collection.add(e)
            # case 4
            elif query.lower() in e.full_name.lower() or e.full_name.lower() in query.lower():
                data_bins[4].add(e)
                collection.add(e)
            # case 3
            elif query.lower() in [x.term.lower() for x in e.search_terms.all()]:
                data_bins[3].add(e)
                collection.add(e)
            # case 6
            else:
                data_bins[6].add(e)
                collection.add(e)

def investigate_units(t, query, data_bins, collection):
    units_for_term = t.unit_set.all()
    for u in units_for_term:
        if u in collection:
            continue
        # case 1
        if u.quick_name == query or u.full_name.lower() == query.lower():
            data_bins[1].add(u)
            collection.add(u)
        # case 2
        elif u.quick_name.lower() == query.lower():
            data_bins[2].add(u)
            collection.add(u)
        # case 4
        elif query.lower() in u.full_name.lower() or u.full_name.lower() in query.lower():
            data_bins[4].add(u)
            collection.add(u)
        # case 3. Execute this last, because quick_name and full_name are in search_terms 
        elif query.lower() in [x.term.lower() for x in u.search_terms.all()]:
            data_bins[3].add(u)
            collection.add(u)
        # case 6
        else:
            data_bins[6].add(u)
            collection.add(u)


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

# logs the search as a QueryLog object
def log_search(query_string):
    try:
        log = QueryLog.objects.get(query=query_string)
        log.count += 1
        log.most_recent_lookup = timezone.now()
        log.save()
    except ObjectDoesNotExist:
        log = QueryLog(query=query_string, most_recent_lookup=timezone.now())
        log.save()
    except:
        pass
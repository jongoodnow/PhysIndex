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
    if any(sym for sym in ['=','+','<','>'] in query):
        return equation_exclusive_search(query)
    else:
        return general_search(query)
    """
    return general_search(query)


def general_search(query):
    term_results = query_db(query)
    if not term_results.count():
        return None
    data_bins = BinArray(6)
    for t in term_results:
        investigate_objects(t, query, data_bins)
    return data_bins.as_list()


def equation_exclusive_search(query):
    pass


def query_db(query):
    query_no_punct = query.encode('utf8')\
        .translate(string.maketrans("",""), string.punctuation)
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


def investigate_objects(term, query, data_bins):
    for obj in list(chain(term.variable_set.all(), 
                          term.equation_set.all(), 
                          term.unit_set.all())):
        if data_bins.in_a_bin(obj):
            continue
        elif obj.quick_name == query or obj.full_name.lower() == query.lower():
            if type(obj) is Variable:
                data_bins.put_in_bin(obj, 0)
            else:
                data_bins.put_in_bin(obj, 1)
        elif obj.quick_name.lower() == query.lower():
            data_bins.put_in_bin(obj, 2)
        elif (query.lower() in {x.term.lower() for x in obj.search_terms.all() if
                                x.term != obj.quick_name and 
                                x.term != obj.full_name}):
            data_bins.put_in_bin(obj, 3)
        elif (query.lower() in obj.full_name.lower() or
              obj.full_name.lower() in query.lower()):
            data_bins.put_in_bin(obj, 4)
        else:
            data_bins.put_in_bin(obj, 5) 


# logs the search as a QueryLog object
def log_search(query_string):
    log = QueryLog.objects.get_or_create(query=query_string,
        defaults={'count': 1, 'most_recent_lookup': timezone.now()})
    if not log[1]: 
        log[0].count += 1
        log[0].most_recent_lookup = timezone.now()
        log[0].save()
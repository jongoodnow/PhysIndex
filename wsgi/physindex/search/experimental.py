"""
   A place to keep the crazy things I've been trying but 
   haven't gotten ready for primetime.
"""

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


def result_sort(obj, query):
    if obj.quick_name == query or obj.full_name.lower() == query.lower():
        if type(obj) is Variable:
            return 0
        else:
            return 1
    elif obj.quick_name.lower() == query.lower():
        return 2
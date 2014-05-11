from django.shortcuts import render, get_object_or_404
from django.db import DatabaseError
from django.db.models.loading import get_model, get_apps, get_models
from django.contrib.admin.views.decorators import staff_member_required
from django.http import Http404, HttpResponse
from django.core.mail import mail_admins
from forms import SearchForm
from models import Variable, Equation, Unit
from utils.searching import find_results
from utils.spreadsheets import UnicodeWriter, _field_extractor_function
from itertools import chain
import csv
    

def search(request):
    """ call from when a user types something into the search box """
    if request.method == 'GET':
        form = SearchForm(request.GET)
        if form.is_valid():
            query_string = form.cleaned_data['query']
            if query_string:
                try:
                    results = find_results(query_string)
                except DatabaseError:
                    mail_admins("PHYSINDEX DATABASE ERROR", 
                                "Database raised an exception on query \"%s\"" 
                                    %query_string,
                                fail_silently=True)
                    return render(request, 'search/dbfailure.html', {})
                else:
                    info_to_push = {'results': results, 
                                    'query_string': query_string,
                                    'slice_size': ':10'}
                    return render(request, 'search/results.html', info_to_push)
    form = SearchForm()
    return render(request, 'search/main.html', {'form': form,})


def indiv(request, cls, name):
    """ show just one article for a specific unit, variable, or equation """
    if cls == "v":
        c = Variable
    elif cls == "e":
        c = Equation
    elif cls == "u":
        c = Unit
    else:
        raise Http404
        return None
    obj = get_object_or_404(c, full_name=name)
    return render(request, 'search/indiv.html', {'results': [obj], 
                                                 'slice_size': ':'})


def features(request):
    return render(request, 'search/features.html', {})


def about(request):
    return render(request, 'search/about.html', {})


def contact(request):
    return render(request, 'search/contact.html', {})


def beta(request):
    return render(request, 'search/beta.html', {})

### SUPER SECRET PAGES (admin stuff) ###

@staff_member_required
def spreadsheet(request, model_name):
    """Return a CSV file for this table."""
    app_label = 'search'
    model = get_model(app_label, model_name)
    if not model:
        raise Http404
    fields = model._meta.fields
    field_funcs = [ _field_extractor_function(f) for f in fields ]
    response = HttpResponse(mimetype='text/csv')
    response['Content-Disposition'] = 'attachment; filename=PhysIndex-%ss.csv'\
                                       %model_name.capitalize()
    writer = UnicodeWriter(response, quoting=csv.QUOTE_ALL)
    writer.writerow([ f.verbose_name for f in fields ])
    for o in model.objects.all():
        writer.writerow([ func(o) for func in field_funcs ])
    return response


@staff_member_required
def adminqueue(request):
    """ Display all articles that have not been marked as revised. """
    inqueue = list(chain(Unit.objects.filter(was_revised=False)\
        .prefetch_related('variable_set', 'composition_links'),
                         Variable.objects.filter(was_revised=False)\
        .prefetch_related('equation_set', 'units_links', 'definition'),
                         Equation.objects.filter(was_revised=False)\
        .prefetch_related('variables', 'defined_var')))
    return render(request, 'search/adminqueue.html', {'results': inqueue, 
                                                      'slice_size': ':'})


@staff_member_required
def set_revised(request, cls, name):
    """ button on adminqueue to mark articles as revised. """
    if cls == "v":
        c = Variable
    elif cls == "e":
        c = Equation
    elif cls == "u":
        c = Unit
    else:
        raise Http404
        return None
    obj = get_object_or_404(c, full_name=name)
    obj.was_revised = True
    obj.save()
    return adminqueue(request)
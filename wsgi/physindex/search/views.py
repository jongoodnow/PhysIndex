from django.shortcuts import render, get_object_or_404
from django.db import DatabaseError
from django.db.models.loading import get_model, get_apps, get_models
from django.contrib.admin.views.decorators import staff_member_required
from django.http import Http404, HttpResponse
from django.core.mail import mail_admins
import csv
from forms import SearchForm
from models import Variable, Equation, Unit, Source
from searchfcns import find_results
from spreadsheets import UnicodeWriter, _field_extractor_function
    

# executes the search using the HTML form
def search(request):
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
                                    'query_string': query_string,}
                    return render(request, 'search/results.html', info_to_push)
    form = SearchForm()
    return render(request, 'search/main.html', {'form': form,})


# shows the details about a specific variable
def variable(request, name):
    var = get_object_or_404(Variable, full_name=name)
    return render(request, 'search/indiv.html', {'obj': var})


# shows the details about a specific equation
def equation(request, name):
    eq = get_object_or_404(Equation, full_name=name)
    return render(request, 'search/indiv.html', {'obj': eq})


# shows the details about a specific variable
def unit(request, name):
    u = get_object_or_404(Unit, full_name=name)
    return render(request, 'search/indiv.html', {'obj': u})


# show the help page
def help(request):
    return render(request, 'search/help.html', {})


# show the about page
def about(request):
    return render(request, 'search/about.html', {})


# show the contact page
def contact(request):
    return render(request, 'search/contact.html', {})


# show the credits page
def references(request):
    try:
        sources = Source.objects.all()
    except DatabaseError:
        mail_admins("PHYSINDEX DATABASE ERROR", 
                    "Database raised an exception on the REFERENCES page.",
                    fail_silently=True)
        return render(request, 'search/dbfailure.html', {})
    return render(request, 'search/references.html', {'sources': sources})


# show the beta page
def beta(request):
    return render(request, 'search/beta.html', {})


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
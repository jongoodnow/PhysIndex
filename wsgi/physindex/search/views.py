from django.shortcuts import render, get_object_or_404
from django.db import DatabaseError
from django.core.mail import mail_admins
from forms import SearchForm
from models import Variable, Equation, Unit, Source
from searchfcns import find_results
    

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


# export a model to a csv. Code borrowed from https://djangosnippets.org/snippets/144/

import csv, codecs, cStringIO
from django.db.models.loading import get_model, get_apps, get_models
from django.db.models import BooleanField
from django.contrib.admin.views.decorators import staff_member_required
from django.http import Http404, HttpResponse
from django.shortcuts import render_to_response
from django.template.defaultfilters import yesno


class UnicodeWriter:
    """
    A CSV writer which will write rows to CSV file "f",
    which is encoded in the given encoding. Borrowed from Python CSV documentation.
    """

    def __init__(self, f, dialect=csv.excel, encoding="utf-8", **kwds):
        # Redirect output to a queue
        self.queue = cStringIO.StringIO()
        self.writer = csv.writer(self.queue, dialect=dialect, **kwds)
        self.stream = f
        self.encoder = codecs.getincrementalencoder(encoding)()

    def writerow(self, row):
        self.writer.writerow([s.encode("utf-8") for s in row])
        # Fetch UTF-8 output from the queue ...
        data = self.queue.getvalue()
        data = data.decode("utf-8")
        # ... and reencode it into the target encoding
        data = self.encoder.encode(data)
        # write to the target stream
        self.stream.write(data)
        # empty queue
        self.queue.truncate(0)

    def writerows(self, rows):
        for row in rows:
            self.writerow(row)


__all__ = ( 'spreadsheet', )


def _field_extractor_function(field):
    """Return a function that extracts a given field from an instance of a model."""
    if field.choices:
        return (lambda o: getattr(o, 'get_%s_display' % field.name)())
    elif isinstance(field, BooleanField):
        return (lambda o: yesno(getattr(o, field.name), "Yes,No"))
    else:
        return (lambda o: unicode(getattr(o, field.name)))


@staff_member_required
def spreadsheet(request, model_name):
    """Return a CSV file for this table."""

    # Get the fields of the table
    app_label = 'search'
    model = get_model(app_label, model_name)
    if not model:
        raise Http404
    fields = model._meta.fields
    field_funcs = [ _field_extractor_function(f) for f in fields ]

    # set the HttpResponse
    response = HttpResponse(mimetype='text/csv')
    response['Content-Disposition'] = 'attachment; filename=PhysIndex-%ss.csv' % model_name.capitalize()
    writer = UnicodeWriter(response, quoting=csv.QUOTE_ALL)

    # Write the header of the CSV file
    writer.writerow([ f.verbose_name for f in fields ])

    # Write all rows of the CSV file
    for o in model.objects.all():
        writer.writerow([ func(o) for func in field_funcs ])

    # All done
    return response
from django.shortcuts import render, get_object_or_404
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
                # find and render the results
                results = find_results(query_string)
                info_to_push = {'results': results, 'query_string': query_string}
                return render(request, 'search/results.html', info_to_push)
            else:
                form = SearchForm()
        else:
            form = SearchForm()
    else:
        form = SearchForm()
    
    return render(request, 'search/main.html', {
        'form': form,
    })

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
    return render(request, 'search/references.html', {'sources': Source.objects.all()})

# show the beta page
def beta(request):
    return render(request, 'search/beta.html', {})
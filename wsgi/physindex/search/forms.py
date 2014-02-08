from django import forms
from models import Subject, SearchTerm

class SearchForm(forms.Form):
	query = forms.CharField()
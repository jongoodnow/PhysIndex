from django import forms
from models import Subject, SearchTerm, Variable, Unit, Equation
from suit.widgets import AutosizedTextarea, EnclosedInput

class SearchForm(forms.Form):
	query = forms.CharField()

class VariableAdminForm(forms.ModelForm):
    class Meta:
        model = Variable
        fields = ['quick_name', 'full_name', 'representation', 'description',
                  'description_url', 'units', 'units_links', 'subjects', 'search_terms']
        widgets = {
            'description': AutosizedTextarea(attrs={'class': 'span5'}),
            'representation': AutosizedTextarea(attrs={'class': 'span5'}),
            'units': AutosizedTextarea(attrs={'class': 'span5'}),
        }

class UnitAdminForm(forms.ModelForm):
    class Meta:
        model = Unit
        fields = ['quick_name', 'full_name', 'representation', 'description',
                  'description_url', 'composition', 'composition_links', 'subjects', 'search_terms']
        widgets = {
            'description': AutosizedTextarea(attrs={'class': 'span5'}),
            'representation': AutosizedTextarea(attrs={'class': 'span5'}),
            'composition': AutosizedTextarea(attrs={'class': 'span5'}),
        }

class EquationAdminForm(forms.ModelForm):
    class Meta:
        model = Equation
        fields = ['quick_name', 'full_name', 'representation', 'description',
                  'description_url', 'defined_var', 'variables', 'subjects', 'search_terms']
        widgets = {
            'description': AutosizedTextarea(attrs={'class': 'span5'}),
            'representation': AutosizedTextarea(attrs={'class': 'span5'}),
        }
from django import forms
from models import Subject, SearchTerm, InfoBase
from suit.widgets import AutosizedTextarea

class SearchForm(forms.Form):
	query = forms.CharField()

class DescriptionForm(forms.ModelForm):
    class Meta:
        model = InfoBase
        widgets = {
            'description': AutosizedTextarea(attrs={'class': 'input-xlarge'}),
        }
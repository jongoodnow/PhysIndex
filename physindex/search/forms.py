from django import forms
from models import Subject, SearchTerm, InfoBase
from suit.widgets import AutosizedTextarea, EnclosedInput

class SearchForm(forms.Form):
	query = forms.CharField()

class InfobaseAdminForm(forms.ModelForm):
    class Meta:
        model = InfoBase
        widgets = {
            'description': AutosizedTextarea(attrs={'class': 'input-xlarge'}),
        }
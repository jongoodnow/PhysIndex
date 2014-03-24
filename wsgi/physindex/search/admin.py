from django.contrib import admin
from django.contrib.sites.models import Site
from django.contrib.auth.models import Group
from django.db.models import Q
from simple_history.admin import SimpleHistoryAdmin
from search.models import Subject, Unit, Variable, Equation, SearchTerm, Source, QueryLog
from forms import DescriptionForm

# Variable Display

class EqInline(admin.TabularInline):
	model = Equation.variables.through

class VariableAdmin(admin.ModelAdmin):
	inlines = [EqInline]
	list_display = ('quick_name', 'representation', 'full_name', 'keywords', 'unit_list', 'related_equations', 'author', 'was_revised', 'pub_date')
	list_filter = ['author', 'was_revised', 'pub_date']
	search_fields = ['quick_name', 'full_name']
	date_hierarchy = 'pub_date'
	filter_horizontal = ('subjects', 'cited', 'units_links', 'search_terms',)
	form = DescriptionForm
	
	def related_equations(self,obj):
		return ', '.join([obj.quick_name for obj in obj.equation_set.all()])
		
	def unit_list(self,obj):
		return ', '.join([obj.quick_name for obj in obj.units_links.all()])
	unit_list.short_description = 'Units'
	
	def keywords(self,obj):
		return ', '.join([obj.term for obj in obj.search_terms.all()])

# Unit Display
	
class VarInline(admin.TabularInline):
	model = Variable.units_links.through
	
class UnitAdmin(admin.ModelAdmin):
	inlines = [VarInline]
	list_display = ('quick_name', 'representation', 'full_name', 'composition_list', 'related_variables', 'author', 'was_revised', 'pub_date')
	list_filter = ['author', 'was_revised', 'pub_date']
	search_fields = ['quick_name', 'full_name']
	date_hierarchy = 'pub_date'
	filter_horizontal = ('subjects', 'cited', 'composition_links', 'search_terms',)
	form = DescriptionForm
	
	def related_variables(self,obj):
		return ', '.join([obj.quick_name for obj in obj.variable_set.all()])
		
	def composition_list(self,obj):
		return ', '.join([obj.quick_name for obj in obj.composition_links.all()])
	composition_list.short_description = 'Composition'

# SearchTerm Display
	
class SearchTermAdmin(admin.ModelAdmin):
	list_display = ['term', 'tied_variables', 'tied_equations', 'tied_units']
	search_fields = ['term']

	def tied_variables(self,obj):
		return ', '.join([obj.quick_name for obj in obj.variable_set.all()])

	def tied_equations(self,obj):
		return ', '.join([obj.quick_name for obj in obj.equation_set.all()])

	def tied_units(self,obj):
		return ', '.join([obj.quick_name for obj in obj.unit_set.all()])
	
# Equation Display

class EquationAdmin(admin.ModelAdmin):
	list_display = ('quick_name', 'representation', 'full_name', 'keywords', 'related_variables', 'author', 'was_revised', 'pub_date')
	list_filter = ['author', 'was_revised', 'pub_date']
	search_fields = ['quick_name', 'full_name']
	date_hierarchy = 'pub_date'
	filter_horizontal = ('variables', 'subjects', 'cited', 'search_terms',)
	form = DescriptionForm
	
	def related_variables(self,obj):
		return ', '.join([obj.quick_name for obj in obj.variables.all()])
		
	def keywords(self,obj):
		return ', '.join([obj.term for obj in obj.search_terms.all()])

# QueryLog Display

class QueryLogAdmin(admin.ModelAdmin):
	list_display = ('query', 'count', 'most_recent_lookup')
	search_fields = ['query']
	list_filter = ('most_recent_lookup',)
	date_hierarchy = 'most_recent_lookup'

admin.site.register(Subject)
admin.site.register(Variable, VariableAdmin)
admin.site.register(Equation, EquationAdmin)
admin.site.register(SearchTerm, SearchTermAdmin)
admin.site.register(Unit, UnitAdmin)
admin.site.register(Source)
admin.site.register(QueryLog, QueryLogAdmin)

admin.site.unregister(Group)
admin.site.unregister(Site)
from django.db import models
from django import forms
from django.utils import timezone
from django.core.exceptions import ObjectDoesNotExist, MultipleObjectsReturned
import re

    
# the field of study that something appears in (physics 1, physics 2, etc)
class Subject(models.Model):
    title = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published',default=timezone.now())
    author = models.CharField(max_length=100,default="anon",blank=True)
    
    def __unicode__(self):
        return self.title


# search terms that will be scanned when the search app is called
class SearchTerm(models.Model):
    term = models.CharField(max_length=400)

    def __unicode__(self):
        return self.term


# consulted literature		
class Source(models.Model):
    title = models.CharField(max_length=200)
    edition = models.IntegerField(default=0)                    # 0 if there is no edition
    authors = models.CharField(max_length=200)
    publisher = models.CharField(max_length=200)
    pub_city = models.CharField(max_length=200)
    year = models.CharField(max_length=10)
    identifier = models.CharField(max_length=20,default='-3', unique=True)   # way to identify the source in the spreadsheets
    add_date = models.DateTimeField('date added',default=timezone.now())
    entered_by = models.CharField(max_length=100)               # your name

    def __unicode__(self):
        return self.title

    def edition_string(self):
        if self.edition % 10 == 1:
            return str(self.edition) + "st"
        elif self.edition % 10 == 2:
            return str(self.edition) + "nd"
        elif self.edition % 10 == 3:
            return str(self.edition) + "rd"
        elif self.edition == 0:
            return ""
        else:
            return str(self.edition) + "th"

    def first_author(self):
        x = re.match(r'^[^,]+,', self.authors)
        if x is not None:
            return x.group().strip(',')
        else:
            # we have one or no authors
            return self.authors


# class from which Unit, Variable, and Equation will be derived
class InfoBase(models.Model):
    quick_name = models.CharField(max_length=200)                          # quick reference name, e.g. N
    representation = models.CharField(max_length=1000,blank=True)          # LaTeX representation
    full_name = models.CharField(max_length=200, unique=True)              # full name, e.g. Newton
    description = models.CharField(max_length=1000, blank=True)            # what it means
    cited = models.ManyToManyField(Source, blank=True)
    cited_pages = models.CharField(max_length=50,default='0',blank=True)   # 0 if not applicable
    pub_date = models.DateTimeField('date updated',default=timezone.now())
    was_revised = models.BooleanField(default=False)
    author = models.CharField(max_length=100,default="anon",blank=True)    # person to blame if the entry is bad
    subjects = models.ManyToManyField(Subject,blank=True)                  # all the subjects that this variable belongs to. There can be more than one!
    search_terms = models.ManyToManyField(SearchTerm,blank=True)           # things that users might call this. Includes quick and full names, but also others

    class Meta:
        abstract = True

    def __unicode__(self):
        return self.full_name

    def rep_without_dollars(self):
        return self.representation.strip("$")

    def add_SearchTerm(self, word):
        try:
            to_link = SearchTerm.objects.get(term__iexact=word)
            self.search_terms.add(to_link)
        except ObjectDoesNotExist:
            a = SearchTerm(term=word)
            a.save()
            self.search_terms.add(a)

    def _add_from_sequence(self, cls, sequence, field_id, field_to_add):
        li = sequence.split(",")
        for s in li:
            to_link = cls.objects.get(**{field_id + "__iexact": s})
            field = getattr(self, field_to_add)
            field.add(to_link)

    def add_Sources(self, sources):
        if sources != '':
            self._add_from_sequence(Source, sources, "identifier", "cited")


class Unit(InfoBase):
    composition = models.CharField(max_length=1000,blank=True)				# LaTeX representation of composition, e.g. kg*m/s^2
    composition_links = models.ManyToManyField('self',blank=True)			# links to composition units.

    def is_unit(self):
        return True

    def is_var(self):
        return False

    def is_eq(self):
        return False

    def make_composition_links(self, composite_string):
        if composite_string != "base" and composite_string != "":
            self._add_from_sequence(Unit, composite_string, 
                "full_name", "composition_links")


# variables that appear in equations. Constants (c, mu_0, etc.) go here too.
class Variable(InfoBase):
    units = models.CharField(max_length=1000,default="none",blank=True)	# LaTeX representation of units
    units_links = models.ManyToManyField(Unit,blank=True)

    def is_unit(self):
        return False

    def is_var(self):
        return True

    def is_eq(self):
        return False

    def add_units_links(self, links):
        if links != "none" and links != "":
            self._add_from_sequence(Unit, links, "full_name", "units_links")


class Equation(InfoBase):
    variables = models.ManyToManyField(Variable, related_name="equation_set")
    defined_var = models.OneToOneField(Variable, null=True, blank=True, related_name="definition")

    def is_unit(self):
        return False

    def is_var(self):
        return False

    def is_eq(self):
        return True

    def is_definition(self):
        if self.defined_var:
            return True
        return False

    def add_variables(self, vars_):
        varlist = vars_.split(',')
        for var in varlist:
            to_link = Variable.objects.get(full_name__iexact=var)
            if not self.defined_var:
                self.variables.add(to_link)
            elif to_link.full_name != self.defined_var.full_name:
                self.variables.add(to_link)

    def add_defined_var(self, name):
        to_link = Variable.objects.get(full_name__iexact=name)
        self.defined_var = to_link
        self.save()

# logs data about what people are searching
class QueryLog(models.Model):
    query = models.CharField(max_length=200)
    count = models.IntegerField(default=1)
    most_recent_lookup = models.DateTimeField('most recent lookup')

    def __unicode__(self):
        return self.query
from django.db import models
from django import forms
from django.utils import timezone
from django.core.exceptions import ObjectDoesNotExist, MultipleObjectsReturned
import re


class Subject(models.Model):
    """ the field of study that an object appears in (physics 1, physics 2, etc)
    """
    title = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published',default=timezone.now())
    author = models.CharField(max_length=100,default="anon",blank=True)
    
    def __unicode__(self):
        return self.title


class SearchTerm(models.Model):
    """ strings that will be matched when the query is run """
    term = models.CharField(max_length=400)

    def __unicode__(self):
        return self.term

	
class Source(models.Model):
    """ Literature referenced for accuracy """
    title = models.CharField(max_length=200)
    edition = models.IntegerField(default=0)    # 0 if there is no edition
    authors = models.CharField(max_length=200)
    publisher = models.CharField(max_length=200)
    pub_city = models.CharField(max_length=200)
    year = models.CharField(max_length=10)
    # identifiers are used to easily signal what source is being used in the csv
    identifier = models.CharField(max_length=20,default='-3', unique=True)
    add_date = models.DateTimeField('date added',default=timezone.now())
    entered_by = models.CharField(max_length=100) # person who typed this in

    def __unicode__(self):
        return self.title

    def edition_string(self):
        """ edition number as a string """
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
        """ Source.authors is a string where names are separated by commas. 
            We just need the first one here. """
        x = re.match(r'^[^,]+,', self.authors)
        if x is not None:
            return x.group().strip(',')
        else:
            # we have one or no authors
            return self.authors


class InfoBase(models.Model):
    """ abstract base class from which Variable, Equation, and Unit come """
    # quick reference name, e.g. N:
    quick_name = models.CharField(max_length=200)
    # LaTeX string of the item:
    representation = models.CharField(max_length=1000,blank=True)
    # full, properly written-out name:
    full_name = models.CharField(max_length=200, unique=True)
    # paragraph explaining what it is:
    description = models.CharField(max_length=1000, blank=True)
    cited = models.ManyToManyField(Source, blank=True)
    # if the cited_pages is set to 0, page numbers will be ignored:
    cited_pages = models.CharField(max_length=50,default='0',blank=True)
    pub_date = models.DateTimeField('date updated',default=timezone.now())
    was_revised = models.BooleanField(default=False)
    # person to blame if the entry is bad:
    author = models.CharField(max_length=100,default="anon",blank=True)
    # relevant areas of study:
    subjects = models.ManyToManyField(Subject,blank=True)
    # keywords that will be scanned on a search. Includes quick_name and
    # full_name.
    search_terms = models.ManyToManyField(SearchTerm,blank=True)

    class Meta:
        abstract = True

    def __unicode__(self):
        return self.full_name

    def rep_without_dollars(self):
        """ so we can add characters to the LaTeX string """
        return self.representation.strip("$")

    def add_SearchTerm(self, word):
        """ create a link between a keyword and the object. If the keyword is
            not known, instantiate a SearchTerm object for it. """
        try:
            to_link = SearchTerm.objects.get(term__iexact=word)
            self.search_terms.add(to_link)
        except ObjectDoesNotExist:
            a = SearchTerm(term=word)
            a.save()
            self.search_terms.add(a)

    def _add_from_sequence(self, cls, sequence, field_id, field_to_add):
        """ versatile function for adding links given a string of data
            separated by commas """
        li = sequence.split(",")
        for s in li:
            to_link = cls.objects.get(**{field_id + "__iexact": s})
            field = getattr(self, field_to_add)
            field.add(to_link)

    def add_Sources(self, sources):
        if sources != '':
            self._add_from_sequence(Source, sources, "identifier", "cited")


class Unit(InfoBase):
    """ units of measurement """
    # LaTeX representation of composition, e.g. kg*m/s^2
    composition = models.CharField(max_length=1000,blank=True)	
    # Links to composition units. For example, Newton is composed of kilograms,
    # meters, and seconds.			
    composition_links = models.ManyToManyField('self',blank=True)

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


class Variable(InfoBase):
    """ variables that appear in equations. Constants (c, mu_0, etc.) go here 
        too. """
    # LaTeX representation of units
    units = models.CharField(max_length=1000,default="none",blank=True)
    # Links to the units of the variable
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
    """ Physics equations. Inequalities are cool too. """
    variables = models.ManyToManyField(Variable, related_name="equation_set")
    # a variable may define an equation. In this case, it is unnecessary to
    # display data for both the equation and the variable. When this field is
    # defined, the variable will be shown instead of the equation. For example,
    # p = mv is the definition of p.
    defined_var = models.OneToOneField(Variable, null=True, blank=True, 
                                       related_name="definition")

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
        """ like _add_from_sequence, but we have to make sure the variable isn't
            the definition, in case someone put it in both columns of the 
            spreadsheet. """
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


class QueryLog(models.Model):
    """ log of data about what people are searching """
    query = models.CharField(max_length=200)
    count = models.IntegerField(default=1)
    most_recent_lookup = models.DateTimeField('most recent lookup')

    def __unicode__(self):
        return self.query
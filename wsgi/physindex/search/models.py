from django.db import models
from django import forms
from django.utils import timezone

# if the max length of a character field isn't high enough, you can make it larger
    
# the field of study that something appears in (physics 1, physics 2, etc)
class Subject(models.Model):
    title = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')
    author = models.CharField(max_length=100,default="anon")
    
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
    identifier = models.CharField(max_length=20,default='-3')
    add_date = models.DateTimeField('date added')
    entered_by = models.CharField(max_length=100) # your name

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
        return " ".join(self.authors.split(" ")[:2]).replace(",","")

# class from which Unit, Variable, and Equation will be derived
class InfoBase(models.Model):
    quick_name = models.CharField(max_length=200)               # quick reference name, e.g. N
    representation = models.CharField(max_length=1000)          # LaTeX representation
    full_name = models.CharField(max_length=200, unique=True)   # full name, e.g. Newton
    description = models.CharField(max_length=1000)             # what it means
    cited = models.ManyToManyField(Source)
    cited_pages = models.CharField(max_length=50,default='0')   # 0 if not applicable
    pub_date = models.DateTimeField('date added')
    was_revised = models.BooleanField(default=False)
    author = models.CharField(max_length=100,default="anon")
    subjects = models.ManyToManyField(Subject)                  # all the subjects that this variable belongs to. There can be more than one!
    search_terms = models.ManyToManyField(SearchTerm)           # things that users might call this

    class Meta:
        abstract = True

    def __unicode__(self):
        return self.full_name

    def rep_without_dollars(self):
        return self.representation.strip("$")

# units that variables use
class Unit(InfoBase):
    composition = models.CharField(max_length=1000)				# LaTeX representation of composition, e.g. kg*m/s^2
    composition_links = models.ManyToManyField('self')			# links to composition units.

    def is_unit(self):
        return True

    def is_var(self):
        return False

    def is_eq(self):
        return False

# variables that appear in equations. Constants (c, mu_0, etc.) go here too.
class Variable(InfoBase):
    units = models.CharField(max_length=1000,default="none")	# LaTeX representation of units
    units_links = models.ManyToManyField(Unit)					# links to units

    def is_unit(self):
        return False

    def is_var(self):
        return True

    def is_eq(self):
        return False

# physics equations
class Equation(InfoBase):
    variables = models.ManyToManyField(Variable, related_name="equation_set")                # points to all the variables in the equation
    defined_var = models.OneToOneField(Variable, null=True, blank=True, related_name="definition")   # points to the variable defined by the equation. not required

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

# logs data about what people are searching
class QueryLog(models.Model):
    query = models.CharField(max_length=200)                            # the string searched for
    count = models.IntegerField(default=1)                              # number of times searched for
    most_recent_lookup = models.DateTimeField('most recent lookup')     # time of most recent lookup

    def __unicode__(self):
        return self.query
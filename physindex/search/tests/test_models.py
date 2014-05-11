from django.test import TestCase
from django.utils import timezone
from unipath import FSPath as Path
from django.core.exceptions import ObjectDoesNotExist, MultipleObjectsReturned
from ..models import Subject, SearchTerm, Unit, Variable, Equation
from ..management.commands._dbmanip import add_to_db, clear_data

class SearchModelsTest(TestCase):

    def test_infobase_strings(self):
        """ check representation with $ removed and confirm latex is valid """
        v1 = Variable(representation=r'$a$')
        v1.save(no_wiki=True)
        self.assertEqual(v1.rep_without_dollars(), r'\displaystyle{a}')

    def test_infobase_add_SearchTerm(self):
        """ test linking a search term to an infobase or creating it if it 
            doesn't exist. """
        v1 = Variable(full_name="acceleration")
        v1.save(no_wiki=True)
        # creating a search term for the first time
        v1.add_SearchTerm("acc")
        try:
            s1 = SearchTerm.objects.get(term="acc")
        except ObjectDoesNotExist, MultipleObjectsReturned:
            raise AssertionError
        else:
            self.assertTrue(v1 in s1.variable_set.all())
            self.assertTrue(s1 in v1.search_terms.all())
        # now try adding a search term that it already has
        v1.add_SearchTerm("acc")
        try:
            s2 = SearchTerm.objects.get(term="acc")
        except ObjectDoesNotExist, MultipleObjectsReturned:
            raise AssertionError
        else:
            self.assertEqual([x for x in s2.variable_set.all()], [v1])
            self.assertTrue(s2 in v1.search_terms.all())
        # now try adding the same search term to a different object
        e1 = Equation(full_name="Jon's Law")
        e1.save(no_wiki=True)
        e1.add_SearchTerm("acc")
        try:
            s3 = SearchTerm.objects.get(term="acc")
        except ObjectDoesNotExist, MultipleObjectsReturned:
            raise AssertionError
        else:
            self.assertTrue(e1 in s3.equation_set.all())
            self.assertTrue(s3 in e1.search_terms.all())

    def test_infobase_add_from_sequence(self):
        v1 = Variable(full_name="acceleration")
        v1.save(no_wiki=True)
        u1 = Unit(full_name="ms")
        u1.save(no_wiki=True)
        u2 = Unit(full_name="meter")
        u2.save(no_wiki=True)
        u3 = Unit(full_name="second")
        u3.save(no_wiki=True)
        u1.make_composition_links("meter,second")
        v1.add_units_links("meter,second")
        try:
            uget1 = u1.composition_links.get(full_name="meter")
            uget2 = u1.composition_links.get(full_name="second")
            uget3 = v1.units_links.get(full_name="meter")
            uget4 = v1.units_links.get(full_name="second")
        except ObjectDoesNotExist, MultipleObjectsReturned:
            raise AssertionError
        v2 = Variable(full_name="Jon's Constant")
        v2.save(no_wiki=True)
        u4 = Unit(full_name="kilogram")
        u4.save(no_wiki=True)
        u4.make_composition_links("base")
        self.assertFalse(bool(u4.composition_links.all()))

    def test_definitions(self):
        e1 = Equation(full_name="Jon's Law")
        e1.save(no_wiki=True)
        v1 = Variable(full_name="Jon's Constant")
        v1.save(no_wiki=True)
        e1.add_defined_var(v1.full_name)
        self.assertEqual(e1.defined_var.full_name, v1.full_name)

    def test_equation_add_variables(self):
        e1 = Equation(full_name="Jon's Law")
        e1.save(no_wiki=True)
        v1 = Variable(full_name="Jon's Constant")
        v1.save(no_wiki=True)
        v2 = Variable(full_name="Jon's Operator")
        v2.save(no_wiki=True)
        v3 = Variable(full_name="Jon's Plus Sign")
        v3.save(no_wiki=True)
        e1.add_defined_var("Jon's Constant")
        e1.add_variables("Jon's Constant,Jon's Operator,Jon's Plus Sign")
        self.assertEqual(e1.defined_var.full_name, v1.full_name)
        self.assertTrue(v2 in e1.variables.all())
        self.assertTrue(v3 in e1.variables.all())
        self.assertFalse(v1 in e1.variables.all())
    
    def test_addcsv_command(self):
        """ test add_to_db function with small dataset """
        add_to_db(Path(__file__).absolute().ancestor(3)\
                  .child("testdata").child("testdata.csv"))
        try:
            s1 = Subject.objects.get(title="Mechanics (Physics 1)")
            u1 = Unit.objects.get(full_name="second")
            v1 = Variable.objects.get(full_name="Mass")
            e1 = Equation.objects.get(quick_name="F=ma")
        except ObjectDoesNotExist, MultipleObjectsReturned:
            raise AssertionError

    def test_wipedata_command(self):
        """ test clear_data function """
        add_to_db(Path(__file__).absolute().ancestor(3)\
                  .child("testdata").child("testdata.csv"))
        clear_data()
        self.assertEqual(Subject.objects.all().count(), 0)
        self.assertEqual(Unit.objects.all().count(), 0)
        self.assertEqual(Variable.objects.all().count(), 0)
        self.assertEqual(Equation.objects.all().count(), 0)

    def test_infobase_save(self):
        """ the save function is automated to add displaystyle to the latex,
            add a description and link from wikipedia, and full_name and 
            quick_name as search terms. """
        v1 = Variable(full_name="Newton's Second Law", 
                      quick_name="F=ma", 
                      representation="F=ma")
        v1.save()
        self.assertEqual(v1.representation, "$\\displaystyle{F=ma}$")
        self.assertEqual(v1.description, u"Newton's laws of motion are three physical laws that together laid the foundation for classical mechanics. They describe the relationship between a body and the forces acting upon it, and its motion in response to said forces. ")
        self.assertEqual(v1.description_url, u"http://en.wikipedia.org/wiki/Newton%27s_laws_of_motion")
        # NOTE: The above represents a case where the description returned by
        #       wikipedia is NOT what we want, so we need to revise it.
        #
        try:
            s1 = SearchTerm.objects.get(term=v1.full_name)
            s2 = SearchTerm.objects.get(term=v1.quick_name)
        except ObjectDoesNotExist:
            raise AssertionError
        self.assertTrue(s1 in v1.search_terms.all())
        self.assertTrue(s2 in v1.search_terms.all())
        # test save method on existing object
        v1.description = "something else"
        v1.save()
        self.assertEqual(v1.description, "something else")



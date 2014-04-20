from django.test import TestCase
from django.utils import timezone
from unipath import FSPath as Path
from django.core.exceptions import ObjectDoesNotExist, MultipleObjectsReturned
from models import Subject, SearchTerm, Source, Unit, Variable, Equation
from management.commands._dbmanip2 import add_to_db, clear_data
from utilities.smartpq import SmartPQ
import utilities.searching as searching

class SearchModelsTest(TestCase):

    def test_source_strings(self):
        """ check the string producing functions for templates """
        s1 = Source.objects.create(title="The Old Man and the Sea")

        def edstr_check(source, value, expected):
            source.edition = value
            return source.edition_string() == expected

        self.assertTrue(edstr_check(s1, 1, "1st"))
        self.assertTrue(edstr_check(s1, 2, "2nd"))
        self.assertTrue(edstr_check(s1, 3, "3rd"))
        self.assertTrue(edstr_check(s1, 6, "6th"))
        self.assertTrue(edstr_check(s1, 23, "23rd"))
        self.assertTrue(edstr_check(s1, 100, "100th"))

        def firstauth_check(source, value, expected):
            source.authors = value
            return source.first_author() == expected
            
        self.assertTrue(firstauth_check(s1, "Nick Boni", "Nick Boni"))
        self.assertTrue(firstauth_check(s1, "Nick Boni, Ernest Hemingway", 
                                            "Nick Boni"))
        self.assertTrue(firstauth_check(s1, "Nick 'The Boss' Boni, E Hemingway",
                                            "Nick 'The Boss' Boni"))
        self.assertTrue(firstauth_check(s1, "", ""))

    def test_infobase_strings(self):
        """ check representation with $ removed and confirm latex is valid """
        v1 = Variable.objects.create(representation=r'$\displaystyle{a}$')
        self.assertEqual(v1.rep_without_dollars(), r'\displaystyle{a}')

    def test_infobase_add_SearchTerm(self):
        """ test linking a search term to an infobase or creating it if it 
            doesn't exist. """
        v1 = Variable.objects.create(full_name="acceleration")
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
            self.assertEqual([x for x in v1.search_terms.all()], [s2])
        # now try adding the same search term to a different object
        e1 = Equation.objects.create(full_name="Jon's Law")
        e1.add_SearchTerm("acc")
        try:
            s3 = SearchTerm.objects.get(term="acc")
        except ObjectDoesNotExist, MultipleObjectsReturned:
            raise AssertionError
        else:
            self.assertTrue(e1 in s3.equation_set.all())
            self.assertTrue(s3 in e1.search_terms.all())


    def test_infobase_add_from_sequence(self):
        v1 = Variable.objects.create(full_name="acceleration")
        s1 = Source.objects.create(identifier="1")
        s2 = Source.objects.create(identifier="2")
        v1.add_Sources("1,2")
        u1 = Unit.objects.create(full_name="ms")
        u2 = Unit.objects.create(full_name="meter")
        u3 = Unit.objects.create(full_name="second")
        u1.make_composition_links("meter,second")
        v1.add_units_links("meter,second")
        try:
            sget1 = v1.cited.get(identifier="1")
            sget2 = v1.cited.get(identifier="2")
            uget1 = u1.composition_links.get(full_name="meter")
            uget2 = u1.composition_links.get(full_name="second")
            uget3 = v1.units_links.get(full_name="meter")
            uget4 = v1.units_links.get(full_name="second")
        except ObjectDoesNotExist, MultipleObjectsReturned:
            raise AssertionError
        v2 = Variable.objects.create(full_name="Jon's Constant")
        v2.add_Sources("")
        self.assertFalse(bool(v2.cited.all()))
        u4 = Unit.objects.create(full_name="kilogram")
        u4.make_composition_links("base")
        self.assertFalse(bool(u4.composition_links.all()))

    def test_definitions(self):
        e1 = Equation.objects.create(full_name="Jon's Law")
        v1 = Variable.objects.create(full_name="Jon's Constant")
        e1.add_defined_var(v1.full_name)
        self.assertEqual(e1.defined_var.full_name, v1.full_name)

    def test_equation_add_variables(self):
        e1 = Equation.objects.create(full_name="Jon's Law")
        v1 = Variable.objects.create(full_name="Jon's Constant")
        v2 = Variable.objects.create(full_name="Jon's Operator")
        v3 = Variable.objects.create(full_name="Jon's Plus Sign")
        e1.add_defined_var("Jon's Constant")
        e1.add_variables("Jon's Constant,Jon's Operator,Jon's Plus Sign")
        self.assertEqual(e1.defined_var.full_name, v1.full_name)
        self.assertTrue(v2 in e1.variables.all())
        self.assertTrue(v3 in e1.variables.all())
        self.assertFalse(v1 in e1.variables.all())
    
    def test_addcsv_command(self):
        """ test add_to_db function with small dataset """
        add_to_db(Path(__file__).absolute().ancestor(2)\
                  .child("csv").child("feb2data.csv"))
        try:
            s1 = Subject.objects.get(title="Mechanics (Physics 1)")
            c1 = Source.objects.get(title="Physics: Volume 1")
            u1 = Unit.objects.get(full_name="second")
            v1 = Variable.objects.get(full_name="Work")
            e1 = Equation.objects.get(quick_name="p=mv")
        except ObjectDoesNotExist, MultipleObjectsReturned:
            raise AssertionError
        else:
            self.assertEqual(c1.edition, 5)
            self.assertEqual(c1.authors, "R. Resnick, D. Halliday, K. Krane")
            self.assertEqual(c1.publisher, "John Wiley & Sons, Inc.")
            self.assertEqual(c1.pub_city, "New York")
            self.assertEqual(c1.year, "2002")
            self.assertEqual(c1.identifier, "1")
            self.assertEqual(u1.quick_name, "s")

    def test_wipedata_command(self):
        """ test clear_data function """
        add_to_db(Path(__file__).absolute().ancestor(2)\
                  .child("csv").child("feb2data.csv"))
        clear_data()
        self.assertEqual(Source.objects.all().count(), 0)
        self.assertEqual(Subject.objects.all().count(), 0)
        self.assertEqual(Unit.objects.all().count(), 0)
        self.assertEqual(Variable.objects.all().count(), 0)
        self.assertEqual(Equation.objects.all().count(), 0)


class SearchViewsTest(TestCase):

    fixtures = ['linux_testdata.json']

    def test_page_loads(self):
        """ Test the user-accessible pages to make sure they exist """
        pages = ['/', '/about/', '/features/', '/contact/', '/references/', 
                 '/beta/']
        for page in pages:
            resp = self.client.get(page)
            self.assertEqual(resp.status_code, 200)

    def test_search(self):
        """ for the search view, not individual functions """
        pass

    def test_spreadsheets(self):
        """ at this time, spreadsheets are staff only """
        # They are also not tested, and not useful
        pass

    def test_adminqueue(self):
        pass


class SearchFunctionsTest(TestCase):
    """ tests for the actual functions used for the search, located in
        the utilities directory """

    def test_SmartPQ(self):
        """ modified priority queue to check for existence in O(1) time """
        q = SmartPQ()
        q.put((1,"foo"))
        q.put((2,"bar"))
        q.put((4,"baz"))
        q.put((3,"qux"))
        self.assertTrue(q.has_value("foo"))
        self.assertTrue(q.has_value("baz"))
        self.assertFalse(q.has_value(2))
        self.assertEqual(q.ordered_list(), ["foo", "bar", "qux", "baz"])

    def test_query_stripping(self):
        """ check regex for removing trailing/leading punctuation. Leave
            appropriate parens and brackets. """
        rmep = lambda s: searching.rm_external_punct(s)
        self.assertEqual(rmep("foo"), "foo")
        self.assertEqual(rmep("$$foo$$"), "foo")
        self.assertEqual(rmep("$$(foo$$)$$"), "(foo$$)")
        self.assertEqual(rmep("))[({foo{}{{["), "[({foo{}")

    def test_predicate_string_set(self):
        pss = lambda s: searching.predicate_string_set(s)
        self.assertEqual(pss("foo"), {"foo",})
        self.assertEqual(pss("f = ma"), {"fma","f=ma","f = ma", "f  ma"})
        self.assertEqual(pss("f = k*q_1*q_2/(r^2)"), {"f = k*q_1*q_2/(r^2)",
            "fkq1q2r2", "f=kq_1q_2/(r^2)", "f=kq1q2/r^2", "f=kq1q2/(r^2)",
            "f  kq1q2r2", "f=kq_1q_2/r^2"})
from django.test import TestCase
from django.utils import timezone
from django.core.exceptions import ObjectDoesNotExist, MultipleObjectsReturned
from models import Subject, SearchTerm, Source, Unit, Variable, Equation
from management.commands._dbmanip2 import add_to_db, clear_data

class SearchModelsTest(TestCase):

    def test_source_strings(self):
        """ check the string producing functions for templates """
        s1 = Source.objects.create(title="The Old Man and the Sea")
        s1.save()

        # check edition strings
        def edstr_check(source, value, expected):
            source.edition = value
            source.save()
            return source.edition_string() == expected

        self.assertTrue(edstr_check(s1, 1, "1st"))
        self.assertTrue(edstr_check(s1, 2, "2nd"))
        self.assertTrue(edstr_check(s1, 3, "3rd"))
        self.assertTrue(edstr_check(s1, 6, "6th"))
        self.assertTrue(edstr_check(s1, 23, "23rd"))
        self.assertTrue(edstr_check(s1, 100, "100th"))

        def firstauth_check(source, value, expected):
            source.authors = value
            source.save()
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

    def test_infobase_add_Sources(self):
        pass

    def test_unit_make_composition_links(self):
        pass

    def test_variable_add_unit_links(self):
        pass

    def test_definitions(self):
        pass

    def test_equation_add_variables(self):
        pass
    
    def test_addcsv_command(self):
        """ test add_to_db function with small dataset """
        pass

    def test_wipedata_command(self):
        """ test clear_data function """
        pass


class SearchViewsTest(TestCase):

    fixtures = ['linux_testdata.json']

    def test_page_loads(self):
        """ Test the user-accessible pages to make sure they exist """
        pages = ['/', '/about/', '/features/', '/contact/', '/references/', 
                 '/beta/']
        for page in pages:
            resp = self.client.get(page)
            self.assertEqual(resp.status_code, 200)

    def test_spreadsheets(self):
        """ at this time, spreadsheets are staff only """
        pass

    def test_search(self):
        """ for the search view, not individual functions """
        pass

class SearchFunctionsTest(TestCase):
    """ tests for the actual functions used for the search, located in
        searchfcns.py """

    fixtures = ['linux_testdata.json']

    def test_SmartPQ(self):
        """ modified priority queue to check for exists in O(1) time """
        pass

    def test_query_strpping(self):
        """ check regex for trailing/leading punctuation """
        pass

    def test_equation_vs_general_handling(self):
        """ test if find_results can tell if you searched an equation or 
            something else """
        pass

    def test_predicate_string_set(self):
        pass

    def test_equation_predicates(self):
        pass
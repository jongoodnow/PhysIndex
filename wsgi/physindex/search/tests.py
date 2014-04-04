from django.test import TestCase
from models import Subject, SearchTerm, Source, Unit, Variable, Equation
from management.commands._dbmanip2 import add_to_db, clear_data

create_test_database = lambda: add_to_db('csv\\feb2data.csv')

class SearchModelsTest(TestCase):

    def test_source_strings(self):
        """ check the string producing functions for templates """
        pass

    def test_infobase_strings(self):
        """ check representation with $ removed and confirm latex is valid """
        pass

    def test_infobase_add_SearchTerm(self):
        pass

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

    create_test_database()

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

    create_test_database()

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
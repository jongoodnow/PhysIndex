from django.test import TestCase
from django.test.client import Client
from models import Equation, Variable, Unit

class SearchViewsTest(TestCase):

    def setUp(self):
        self.client = Client()
        self.e1 = Equation.objects.create(quick_name="f=ma", full_name="Newton's Second Law")
        self.v1 = Variable.objects.create(quick_name="m", full_name="Mass")
        self.u1 = Unit.objects.create(quick_name="A", full_name="Ampere")
        self.v2 = Variable.objects.create(quick_name="p", full_name="Linear Momentum")
        self.e2 = Equation.objects.create(quick_name="p=mv", full_name="Definition of Linear Momentum", 
            defined_var=self.v2)

    def test_page_loads(self):
        """ Test the user-accessible pages to make sure they exist """
        pages = ['/', '/about/', '/features/', '/contact/', '/beta/']
        for page in pages:
            resp = self.client.get(page)
            self.assertEqual(resp.status_code, 200)

    def test_search(self):
        """ Check the results when people type into the box and search """
        # EQUATION TEST
        resp = self.client.get('/', {'query': "f = ma"})
        self.assertTrue(self.e1 in resp.context['results'])
        # VARIABLE TEST
        resp = self.client.get('/', {'query': "m"})
        self.assertEqual(self.v1, resp.context['results'][0])
        # UNIT TEST
        resp = self.client.get('/', {'query': "A"})
        self.assertTrue(self.u1 in resp.context['results'])
        # DEFINITION TEST
        resp = self.client.get('/', {'query': "p=mv"})
        self.assertTrue(self.v2 in resp.context['results'])
        self.assertFalse(self.e2 in resp.context['results'])        

    def test_indiv(self):
        """ Check the pages for individual articles. """
        # EQUATION TEST
        resp = self.client.get('/e/Newton\'s Second Law/')
        self.assertTrue(self.e1 in resp.context['results'])
        # VARIABLE TEST
        resp = self.client.get('/v/Mass/')
        self.assertTrue(self.v1 in resp.context['results'])
        # UNIT TEST
        resp = self.client.get('/u/Ampere/')
        self.assertTrue(self.u1 in resp.context['results'])
        # DEFINITION TEST
        resp = self.client.get('/e/Definition of Linear Momentum/')
        self.assertTrue(self.e2 in resp.context['results'])
        resp = self.client.get('/v/Linear Momentum/')
        self.assertTrue(self.v2 in resp.context['results'])


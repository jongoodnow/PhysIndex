from django.test import TestCase
from models import Subject, SearchTerm, Source, Unit, Variable, Equation
from unipath import FSPath as Path

BASE = Path(__file__).absolute().ancestor(2)

class SearchViewsTest(TestCase):

    status_check = lambda resp: self.assertEqual(resp.status_code, 200)

    def test_search(self):
        resp = self.client.get('/')
        status_check(resp)
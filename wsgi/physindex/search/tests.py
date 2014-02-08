"""
This file demonstrates writing tests using the unittest module. These will pass
when you run "manage.py test".
"""

from django.utils import unittest
from models import Subject, SearchTerm, Source, Unit, Variable, Equation, QueryLog
from dbmanip import add_to_db, clear_db, is_db_empty
from unipath import FSPath as Path

BASE = Path(__file__).absolute().ancestor(2)

class SearchTest(unittest.TestCase):
    def setUp(self):
        if not is_db_empty():
            clear_db(True)
        try:
            add_to_db("testdata.csv")
        except:
            if not is_db_empty():
                clear_db()
            exit()
from django.test import TestCase
from ..models import Subject, SearchTerm, Source, Unit, Variable, Equation
from ..utils.smartpq import SmartPQ
from ..utils import searching as searching

class SearchUtilsTest(TestCase):
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
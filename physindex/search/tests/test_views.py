from django.test import TestCase

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
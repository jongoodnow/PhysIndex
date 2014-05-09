from wikipedia import page, summary
from wikipedia.exceptions import WikipediaException
import sys

def wikipedia_fetch(title):
    """ returns a tuple containing the url to a page and a 3 sentence summary. """
    try:
        pg = page(title)
        smry = summary(title, sentences=3)
    except WikipediaException, e:
        raise WikipediaException(e)
    else:
        return (pg.url, smry)
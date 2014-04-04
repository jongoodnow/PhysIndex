# export a model to a csv. Code borrowed from https://djangosnippets.org/snippets/144/
import csv, codecs, cStringIO
from django.db.models import BooleanField
from django.template.defaultfilters import yesno

class UnicodeWriter:
    """
    A CSV writer which will write rows to CSV file "f",
    which is encoded in the given encoding. Borrowed from Python CSV documentation.
    """

    def __init__(self, f, dialect=csv.excel, encoding="utf-8", **kwds):
        # Redirect output to a queue
        self.queue = cStringIO.StringIO()
        self.writer = csv.writer(self.queue, dialect=dialect, **kwds)
        self.stream = f
        self.encoder = codecs.getincrementalencoder(encoding)()

    def writerow(self, row):
        self.writer.writerow([s.encode("utf-8") for s in row])
        # Fetch UTF-8 output from the queue ...
        data = self.queue.getvalue()
        data = data.decode("utf-8")
        # ... and reencode it into the target encoding
        data = self.encoder.encode(data)
        # write to the target stream
        self.stream.write(data)
        # empty queue
        self.queue.truncate(0)

    def writerows(self, rows):
        for row in rows:
            self.writerow(row)


def _field_extractor_function(field):
    """Return a function that extracts a given field from an instance of a model."""
    if field.choices:
        return (lambda o: getattr(o, 'get_%s_display' % field.name)())
    elif isinstance(field, BooleanField):
        return (lambda o: yesno(getattr(o, field.name), "Yes,No"))
    else:
        return (lambda o: unicode(getattr(o, field.name)))
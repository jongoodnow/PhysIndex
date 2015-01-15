from django.core.management.base import BaseCommand, CommandError
from search.models import Equation, Variable, Unit
from django.conf import settings
import os
import json

class Command(BaseCommand):
    help = """Write a public JSON file that contains the full names of all 
        equations, variables, and units. Must be performed on deploy."""

    def handle(self, *args, **options):
        full_names = [eq.full_name for eq in Equation.objects.all() 
            if not eq.full_name.lower().startswith('definition')]
        full_names += [var.full_name for var in Variable.objects.all()]
        full_names += [un.full_name for un in Unit.objects.all()]
        dest_path = '/home/jon/projects/PhysIndex/wsgi/static/search/data/names.json' #os.path.join(settings.STATIC_ROOT, 'search', 'data', 'names.json')
        with open(dest_path, 'w') as dest:
            dest.write(json.dumps(full_names))
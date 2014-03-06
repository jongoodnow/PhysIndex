from django.core.management.base import BaseCommand, CommandError
from django.conf import settings
from optparse import make_option
from _dbmanip2 import clear_data

class Command(BaseCommand):

    def handle(self, *args, **options):
        clear_data()
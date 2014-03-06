from django.core.management.base import BaseCommand, CommandError
from _dbmanip2 import add_to_db

class Command(BaseCommand):
    args = '<csv_name>'

    def handle(self, *args, **options):
        if len(args) != 1:
            self.stdout.write("Hey, I just wanted a CSV!")
        else:
            csv_link = args[0]
            add_to_db(csv_link)
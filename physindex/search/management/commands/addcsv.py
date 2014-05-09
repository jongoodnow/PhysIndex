from django.core.management.base import BaseCommand, CommandError
from _dbmanip import add_to_db

class Command(BaseCommand):
    help = "Import a properly formatted csv into the database."
    args = '<csv_name>'

    def handle(self, *args, **options):
        if len(args) != 1:
            self.stderr.write("You should pass me the name of your csv, and nothing else.")
            raise CommandError
        else:
            csv_link = args[0]
            self.stdout.write("Now importing data. Descriptions from Wikipedia will be added automatically. This may take a while.")
            add_to_db(csv_link)
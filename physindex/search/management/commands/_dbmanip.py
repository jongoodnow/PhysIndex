import csv
from search.models import Subject, SearchTerm, Unit, Variable, Equation, Source
from django.utils import timezone
from django.core.exceptions import ObjectDoesNotExist, MultipleObjectsReturned

# Takes a CSV and adds the data to the database
def add_to_db(datafile):

    with open(datafile, 'rb') as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            model_id = row[1]

################## SOURCE ###################

            if model_id == "c":
                c = Source(title=row[2],
                           edition=int(row[3]),
                           authors=row[4],
                           publisher=row[5],
                           pub_city=row[6],
                           year=row[7],
                           identifier=row[8],
                           entered_by=row[0],
                           add_date=timezone.now())
                c.save()
                    
################## SUBJECT ##################

            elif model_id == "s":
                s = Subject(title=row[2],
                            pub_date=timezone.now(),
                            author=row[0])
                s.save()

################## INFOBASE #################

            elif model_id == "u" or model_id == "v" or model_id == "e":

                # let's get the lingo down...
                kwargs = {
                    'author': row[0],
                    'quick_name': row[2],
                    'representation': row[3],
                    'full_name': row[4],
                    'pub_date': timezone.now(),
                }

                ######## UNITS ########

                if model_id == "u":
                    kwargs['composition'] = row[5]
                    composition_links_ = row[6]
                    alt_names_ = row[7]
                    x = Unit(**kwargs)
                    x.save()
                    x.make_composition_links(composition_links_)
                    defined_var_ = None

                ######## VARIABLES ########

                elif model_id == "v":
                    subject_ = row[5]
                    alt_names_ = row[6]
                    kwargs['units'] = row[8]
                    units_links_ = row[7]
                    x = Variable(**kwargs)
                    x.save()
                    x.add_units_links(units_links_)
                    defined_var_ = None

                ######## EQUATIONS ########

                elif model_id == "e":
                    subject_ = row[5]
                    alt_names_ = row[6]
                    variables_ = row[7]
                    defined_var_ = row[8]
                    x = Equation(**kwargs)
                    x.save()
                    if defined_var_: x.add_defined_var(defined_var_)
                    x.add_variables(variables_)

                ######## GENERAL ########

                if alt_names_:
                    for alt in alt_names_.split(','):
                        x.add_SearchTerm(alt)

            else:
                print "Can't identify model id %s. Skipping it." %model_id


def clear_data():
    Source.objects.all().delete()
    Subject.objects.all().delete()
    SearchTerm.objects.all().delete()
    Unit.objects.all().delete()
    Variable.objects.all().delete()
    Equation.objects.all().delete()
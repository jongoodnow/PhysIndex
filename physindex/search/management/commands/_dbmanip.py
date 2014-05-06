"""
000   1   2222222222   33333333333333   444444444   55555555555   66666666666   77777777777777777   888888888888   99999999999   101010101010  11111111111
CITATION ORDERING:
you | c | title      | authors        | publisher | pub_city    | year        | identifier

SUBJECT ORDERING:
you | s | name

UNIT ORDERING:
you | u | quick_name | representation | full_name | description | composition | composition_links | search_terms | cited       | cited_pages

VARIABLE ORDERING:
you | v | quick_name | representation | full_name | description | subject     | search_terms      | units        | units_links | cited       | cited_pages

EQUATION ORDERING:
you | e | quick_name | representation | full_name | description | subject     | search_terms      | variables    | cited       | cited_pages | defined_var
"""

import csv
from search.models import Subject, SearchTerm, Unit, Variable, Equation, Source
from django.utils import timezone
from django.core.exceptions import ObjectDoesNotExist, MultipleObjectsReturned

# Takes a CSV and adds the data to the database
def add_to_db(datafile):

    def display_rep(latex):
        if not latex == "base" and not latex == "":
            return "$\\displaystyle{" + latex.strip('$') + "}$"
        return ""

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
                author_ = row[0]
                quick_name_ = row[2]
                representation_ = display_rep(row[3])
                full_name_ = row[4]
                print full_name_

                ######## UNITS ########

                if model_id == "u":
                    composition_ = display_rep(row[5])
                    composition_links_ = row[6]
                    alt_names_ = row[7]
                    x = Unit(quick_name=quick_name_,
                             representation=representation_,
                             full_name=full_name_,
                             composition=composition_,
                             pub_date=timezone.now(),
                             author=author_)
                    x.save()
                    x.make_composition_links(composition_links_)
                    defined_var_ = None

                ######## VARIABLES ########

                elif model_id == "v":
                    subject_ = row[5]
                    alt_names_ = row[6]
                    units_ = display_rep(row[8])
                    units_links_ = row[7]
                    x = Variable(quick_name=quick_name_,
                                 representation=representation_,
                                 full_name=full_name_,
                                 pub_date=timezone.now(),
                                 units=units_,
                                 author=author_)
                    x.save()
                    x.add_units_links(units_links_)
                    defined_var_ = None

                ######## EQUATIONS ########

                elif model_id == "e":
                    subject_ = row[5]
                    alt_names_ = row[6]
                    variables_ = row[7]
                    defined_var_ = row[8]
                    x = Equation(quick_name=quick_name_,
                                 representation=representation_,
                                 full_name=full_name_,
                                 pub_date=timezone.now(),
                                 author=author_)
                    x.save()
                    if defined_var_: x.add_defined_var(defined_var_)
                    x.add_variables(variables_)

                ######## GENERAL ########
                
                x.add_SearchTerm(quick_name_)
                x.add_SearchTerm(full_name_)
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
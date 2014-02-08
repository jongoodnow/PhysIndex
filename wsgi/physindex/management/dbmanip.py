"""
CITATION ORDERING:
you | c | title | authors | publisher | pub_city | year | identifier

SUBJECT ORDERING:
you | s | name

UNIT ORDERING:
you | u | quick_name | representation | full_name | description | composition | composition_links | cited | cited_pages

VARIABLE ORDERING:
you | v | quick_name | representation | full_name | description | subject | search_terms | units | units_links | cited | cited_pages

EQUATION ORDERING:
you | e | quick_name | representation | full_name | description | subject | search_terms | variables | cited | cited_pages | defined_var
"""

import csv
import string
from search.models import Subject, SearchTerm, Unit, Variable, Equation, Source, QueryLog
from django.utils import timezone
from django.core.exceptions import ObjectDoesNotExist, MultipleObjectsReturned

# Takes a CSV and adds the data to the database following the convention above. set debug=True for verbose updates

def add_to_db(datafile, debug=False):
	with open(datafile, 'rb') as csvfile:
		reader = csv.reader(csvfile)
		for row in reader:

################## SOURCE ###################

			if row[1] == "c":
				c = Source(title=row[2],edition=int(row[3]),authors=row[4],publisher=row[5],pub_city=row[6],year=row[7],identifier=row[8],entered_by=row[0],add_date=timezone.now())
				c.save()
				if(debug):
					print "Source %s successfully added" %row[2]
					
################## SUBJECT ##################

			elif row[1] == "s":
				s = Subject(title=row[2],pub_date=timezone.now(),author=row[0])
				s.save()
				if(debug):
					print "Subject %s successfully added" %row[2]

################## UNIT #####################
					
			elif row[1] == "u":
				u = Unit(quick_name=row[2],representation=row[3],full_name=row[4],description=row[5],composition=row[6],pub_date=timezone.now(),author=row[0],cited_pages=row[10])
				u.save()

				# add quick_name to search term field
				try:
					to_link = SearchTerm.objects.get(term__iexact=row[2])
					u.search_terms.add(to_link)
				except ObjectDoesNotExist:
					a = SearchTerm(term=row[2])
					a.save()
					u.search_terms.add(a)

				# add full_name to search term field
				try:
					to_link = SearchTerm.objects.get(term=row[4])
					u.search_terms.add(to_link)
				except ObjectDoesNotExist:
					a = SearchTerm(term=row[4])
					a.save()
					u.search_terms.add(a)

				# COMPOSITION

				if row[7] != "base":
					pieces = row[7].split(",")
					for part in pieces:
						try:
							to_link = Unit.objects.get(full_name__iexact=part)
							u.composition_links.add(to_link)
						except ObjectDoesNotExist:
							print "You tried to find the unit %s but it isn't in the database yet! Skipping. Row: %s" %(part,row)
						except MultipleObjectsReturned:
							print "The full_name %s matches more than one unit! Skipping. Row: %s" %(part,row)

				# SOURCES

				if row[9] != '':
					sources = row[9].split(",")
					for s in sources:
						try:
							to_link = Source.objects.get(identifier=s)
							u.cited.add(to_link)
						except ObjectDoesNotExist:
							print "You tried to find the source %s but it isn't in the database yet! Skipping. Row: %s" %(s,row)
						except MultipleObjectsReturned:
							print "The identifier %s matches more than one source! Skipping. Row: %s" %(s,row)
				if(debug):
					print "Unit %s successfully added" %row[2]

				# ALTERNATIVE NAMES

				if row[8] != "none":
					alts = row[8].split(",")
					for alt in alts:
						try:
							to_link = SearchTerm.objects.get(term__iexact=alt)
							u.search_terms.add(to_link)
						except ObjectDoesNotExist:
							if(debug):
								print "SearchTerm %s not yet in database. Adding it." %alt
							a = SearchTerm(term=alt)
							a.save()
							u.search_terms.add(a)
						except MultipleObjectsReturned:
							print "The name %s matches more than one SearchTerm! Skipping. Row: %s" %(alt,row)

################## VARIABLE ###################
			
			elif row[1] == "v":
				v = Variable(quick_name=row[2],representation=row[3],full_name=row[4],description=row[5],pub_date=timezone.now(),units=row[9],author=row[0])
				if row[11] != '':
					v.cited_pages = row[11]
				v.save()

				# add quick_name to search term field
				try:
					to_link = SearchTerm.objects.get(term__iexact=row[2])
					v.search_terms.add(to_link)
				except ObjectDoesNotExist:
					a = SearchTerm(term=row[2])
					a.save()
					v.search_terms.add(a)

				# add full_name to search term field
				try:
					to_link = SearchTerm.objects.get(term__iexact=row[4])
					v.search_terms.add(to_link)
				except ObjectDoesNotExist:
					a = SearchTerm(term=row[4])
					a.save()
					v.search_terms.add(a)

				no_punct = row[4].replace("-"," ").replace("*"," ").replace("("," ").replace(")"," ")
				if no_punct != row[4]:
					try:
						to_link = SearchTerm.objects.get(term__iexact=no_punct)
						v.search_terms.add(to_link)
					except ObjectDoesNotExist:
						a = SearchTerm(term=no_punct)
						a.save()
						v.search_terms.add(a)

				# SUBJECTS

				if row[6] == "all" or row[6] == "All":
					for subject in Subject.objects.all():
						v.subjects.add(subject)
				else:
					subs = row[6].split(",")
					for sub in subs:
						try:
							to_link = Subject.objects.get(title__icontains=sub)
							v.subjects.add(to_link)
						except ObjectDoesNotExist:
							print "You tried to find the subject %s but it isn't in the database yet! Skipping. Row: %s" %(sub,row)
						except MultipleObjectsReturned:
							print "The title %s matches more than one subject! Skipping. Row: %s" %(sub,row)

				# ALTERNATIVE NAMES

				if row[7] != "none":
					alts = row[7].split(",")
					for alt in alts:
						try:
							to_link = SearchTerm.objects.get(term__iexact=alt)
							v.search_terms.add(to_link)
						except ObjectDoesNotExist:
							if(debug):
								print "SearchTerm %s not yet in database. Adding it." %alt
							a = SearchTerm(term=alt)
							a.save()
							v.search_terms.add(a)
						except MultipleObjectsReturned:
							print "The name %s matches more than one SearchTerm! Skipping. Row: %s" %(alt,row)

				# UNITS

				if(row[8] != "none" and row[8] != ""):
					unitz = row[8].split(",")
					for un in unitz:
						try: 
							to_link = Unit.objects.get(full_name__iexact=un)
							v.units_links.add(to_link)
						except ObjectDoesNotExist:
							print "You tried to find the unit %s but it isn't in the database yet! Skipping. Row: %s" %(un,row)
						except MultipleObjectsReturned:
							print "The full_name %s matches more than one unit! Skipping. Row: %s" %(un,row)

				# SOURCES

				if row[10] != '':
					sources = row[10].split(",")
					for s in sources:
						try:
							to_link = Source.objects.get(identifier=s)
							v.cited.add(to_link)
						except ObjectDoesNotExist:
							print "You tried to find the source %s but it isn't in the database yet! Skipping. Row: %s" %(s,row)
						except MultipleObjectsReturned:
							print "The identifier %s matches more than one source! Skipping. Row: %s" %(s,row)
				if(debug):
					print "Variable %s successfully added" %row[2]
			
################## EQUATION ###################

			elif row[1] == "e":

				e = Equation(quick_name=row[2],representation=row[3],full_name=row[4],description=row[5],pub_date=timezone.now(),author=row[0],cited_pages=row[10])
				e.save()

				# DEFINED VAR

				if row[11] != "":
					try:
						to_link = Variable.objects.get(full_name__iexact=row[11])
						e.defined_var = to_link
						e.save()
						print "%s linked to %s" %(e.full_name, e.defined_var.full_name)
					except ObjectDoesNotExist:
						print "You tried to find the Variable %s but it isn't in the database yet! Skipping. Row: %s" %(var,row)
					except MultipleObjectsReturned:
						print "The name %s matches more than one Variable! Skipping. Row: %s" %(var,row)

					# ONLY INDEX IF IT'S NOT A DEFINITION

				# add quick_name to search term field
				try:
					to_link = SearchTerm.objects.get(term__iexact=row[2])
					e.search_terms.add(to_link)
				except ObjectDoesNotExist:
					a = SearchTerm(term=row[2])
					a.save()
					e.search_terms.add(a)

				# add full_name to search term field
				try:
					to_link = SearchTerm.objects.get(term__iexact=row[4])
					e.search_terms.add(to_link)
				except ObjectDoesNotExist:
					a = SearchTerm(term=row[4])
					a.save()
					e.search_terms.add(a)

				# add full_name to search terms with punctuation stripped
				no_punct = row[4].replace("-"," ").replace("*","").replace("(","").replace(")","").replace("_","")
				if no_punct != row[4]:
					try:
						to_link = SearchTerm.objects.get(term__iexact=no_punct)
						e.search_terms.add(to_link)
					except ObjectDoesNotExist:
						a = SearchTerm(term=no_punct)
						a.save()
						e.search_terms.add(a)

				# ALTERNATIVE NAMES

				if row[7] != "none" and row[7] != "" and row[7] != " ":
					alts = row[7].split(",")
					for alt in alts:
						try: 
							to_link = SearchTerm.objects.get(term__iexact=alt)
							e.search_terms.add(to_link)
						except ObjectDoesNotExist:
							if(debug):
								print "SearchTerm %s not yet in database. Adding it." %alt
							a = SearchTerm(term=alt)
							a.save()
							e.search_terms.add(a)
						except MultipleObjectsReturned:
							print "The name %s matches more than one SearchTerm! Skipping. Row: %s" %(alt,row)
				

				# SUBJECT

				if row[6] == "all" or row[6] == "All":
					for subject in Subject.objects.all():
						e.subjects.add(subject)
				else:
					subs = row[6].split(",")
					for sub in subs:
						try:
							to_link = Subject.objects.get(title__icontains=sub)
							e.subjects.add(to_link)
						except ObjectDoesNotExist:
							print "You tried to find the subject %s but it isn't in the database yet! Skipping. Row: %s" %(sub,row)
						except MultipleObjectsReturned:
							print "The title %s matches more than one subject! Skipping. Row: %s" %(sub,row)

				# VARIABLES

				vars_ = row[8].split(",")
				for var in vars_:
					try:
						to_link = Variable.objects.get(full_name__iexact=var)
						if not e.defined_var:
							e.variables.add(to_link)
						elif to_link.full_name != e.defined_var.full_name:
							e.variables.add(to_link)
					except ObjectDoesNotExist:
						print "You tried to find the Variable %s but it isn't in the database yet! Skipping. Row: %s" %(var,row)
					except MultipleObjectsReturned:
						print "The name %s matches more than one Variable! Skipping. Row: %s" %(var,row)

				# SOURCES

				if row[9] != '':
					sources = row[9].split(",")
					for s in sources:
						try:
							to_link = Source.objects.get(identifier=s)
							e.cited.add(to_link)
						except ObjectDoesNotExist:
							print "You tried to find the source %s but it isn't in the database yet! Skipping. Row: %s" %(s,row)
						except MultipleObjectsReturned:
							print "The identifier %s matches more than one source! Skipping. Row: %s" %(s,row)

				if(debug):
					print "Equation %s successfully added" %row[2]
			else:
				print "You declared the type as %s. That's not a valid type! Skipping. Row: %s" %(row,row)
	if (debug):
		print "Okay, the database is now synced with %s. Have a great day." %satafile

# removes everything in the database. Setting "force" true won't confirm with you.
def clear_db(force=False):
	if(force):
		Source.objects.all().delete()
		Subject.objects.all().delete()
		SearchTerm.objects.all().delete()
		Unit.objects.all().delete()
		Variable.objects.all().delete()
		Equation.objects.all().delete()
		QueryLog.objects.all().delete()
	elif raw_input("Are you sure you want to clear the database? (y/n) ") == "y":
		#Source.objects.all().delete()
		#Subject.objects.all().delete()
		SearchTerm.objects.all().delete()
		Unit.objects.all().delete()
		Variable.objects.all().delete()
		Equation.objects.all().delete()
		QueryLog.objects.all().delete()
		print "The database is now empty."
	else:
		print "Okay, the database will be left as is."

def is_db_empty():
	if (not Source.objects.all() and 
		not Subject.objects.all() and
		not SearchTerm.objects.all() and
		not Unit.objects.all() and
		not Variable.objects.all() and
		not Equation.objects.all() and
		not QueryLog.objects.all()):
			return False
	return True

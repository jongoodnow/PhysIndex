PhysIndex
====

PhysIndex is a web database of physics variables, equations, and their relationships. It is designed to quickly find articles about the correct equations and variables based on minimal queries, even if the search is for a single letter. It also provides a list of all other relevant articles and links thereto.

It is live (in beta) at [physindex.com]

[physindex.com]:http://www.physindex.com

Get Started
----

Clone the repository and install the dependencies. You will need Python 2.7 and pip first. Confirm that you have Django 1.5 (the below command will install this by default).

```sh
git clone https://github.com/jongoodnow/PhysIndex.git && cd physindex
pip install -r dev_requirements.txt
```

You will need a `local_settings.py` for development. Copy the provided template:

```sh
cd physindex
cp physindex/_local_settings.py physindex/local_settings.py
```

In this file, configure your database and set your `SECRET_KEY`.

Now initialize your database:

```sh
python manage.py syncdb
python manage.py migrate
```

Now you can start your local server with:

```sh
python manage.py runserver
```

Open up a web browser and go to `localhost:8000`.

Working with Data
----

If you would like to populate the database with some initial data, run this:

```sh
python manage.py addcsv testdata/testdata.csv
```

You can clear data using:

```sh
python manage.py wipedata
```

This will remove all Subject, Source, SearchTerm, Variable, Unit, and Equation objects, leaving behind QueryLog and User objects.

Note that full data sets are not available in this repository. These will become available elsewhere in the near future.
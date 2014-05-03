PhysIndex
====

PhysIndex is a web database of physics variables, equations, and their relationships. It is live (in beta) at [physindex.com].

[physindex.com]:http://www.physindex.com

Get Started
----

Clone the repository get the dependencies installed. You will need Python 2.7 and pip first. Confirm that you have Django 1.5 (the below command will install this by default).

```sh
git clone https://github.com/jongoodnow/PhysIndex.git
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
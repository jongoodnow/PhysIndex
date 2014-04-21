PhysIndex
====

PhysIndex is a web database of physics variables, equations, and their relationships. It is live (in beta) at [physindex.com].

[physindex.com]:http://www.physindex.com

Get Started
----

After you clone the repository, get the dependencies installed:

```sh
pip install -r requirements.txt
```

You will need a `local_settings.py` for development. Copy the provided template:

```sh
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

If you would like to populate the database with some initial data, do this:

```sh
python manage.py addcsv csv/testdata.csv --settings=physindex.local_settings
```

You can clear data using:

```sh
python manage.py wipedata --settings=physindex.local_settings
```

This will remove all Subject, Source, SearchTerm, Variable, Unit, and Equation objects, leaving behind QueryLog and User objects.

If you would like to add your own data, please read the README file located in `physindex/csv`.
"""
SAMPLE SETTINGS FOR DEVELOPMENT
--------------
copy this file to "local_settings.py"
local_settings.py will not be committed to version control, but this file will be.

You need to manually set:

 - DATABASES:  change engine to 'django.db.backends.sqlite3' if you don't want
               to create a postgresql database. If you do this, change the NAME
               attribute to the absolute path to your database.

 - SECRET_KEY: Ideally, you should generate a random string for this.

Optional:
If you'd like to use django-debug-toolbar, uncomment it from INSTALLED_APPS.
(make sure you have the app installed)
"""

from base_settings import *

DEBUG = True               # MUST BE SET TO FALSE FOR PRODUCTION
TEMPLATE_DEBUG = DEBUG

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'YOUR DATABASE NAME',
        'USER': '',
        'PASSWORD': '',
        'HOST': '',
        'PORT': '',
    }
}

SECRET_KEY = 'WRITE YOUR SECRET KEY HERE'

INSTALLED_APPS = (
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.sites',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'suit',
    'django.contrib.admin',
    'django.contrib.admindocs',
    'search',
    'south',
    'django_extensions',
    # uncomment below for debug_toolbar. ("django-debug-toolbar" must be installed)
    #'debug_toolbar',
)
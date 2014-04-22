"""
SAMPLE SETTINGS FOR DEVELOPMENT
--------------
copy this file to "local_settings.py" which will not be committed.

You need to manually set:

 - DATABASES:  change engine to 'django.db.backends.sqlite3' if you don't want
               to create a postgresql database. If you do this, change the NAME
               attribute to the absolute path to your database.

 - SECRET_KEY: Ideally, you should generate a random string for this.

Optional:
If you'd like to use django-debug-toolbar, uncomment it from INSTALLED_APPS.
(make sure you have the app installed)

"""

import os
from django.conf.global_settings import TEMPLATE_CONTEXT_PROCESSORS as TCP
from unipath import FSPath as Path

BASE = Path(__file__).absolute().ancestor(2)
    
DEBUG = True
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

TIME_ZONE = 'America/New_York'

LANGUAGE_CODE = 'en-us'

SITE_ID = 1

USE_I18N = True

USE_L10N = True

USE_TZ = True

MEDIA_ROOT = BASE.child('media')

MEDIA_URL = '/m/'

SOUTH_TESTS_MIGRATE = False

STATIC_ROOT = BASE.ancestor(1).child('static_root')

STATIC_URL = '/static/'

STATICFILES_DIRS = (
    BASE.ancestor(1).child('wsgi').child('static'),
)

STATICFILES_FINDERS = (
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
)

SECRET_KEY = 'WRITE YOUR SECRET KEY HERE'

TEMPLATE_LOADERS = (
    'django.template.loaders.filesystem.Loader',
    'django.template.loaders.app_directories.Loader',
)

MIDDLEWARE_CLASSES = (
    'django.middleware.common.CommonMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
)

ROOT_URLCONF = 'physindex.urls'

WSGI_APPLICATION = 'physindex.wsgi.application'

TEMPLATE_DIRS = (
    BASE.child('templates'),
)

TEMPLATE_CONTEXT_PROCESSORS = TCP + (
    'django.core.context_processors.request',
)

SUIT_CONFIG = {
    # header
    'ADMIN_NAME': 'Physindex Admin',
    'HEADER_DATE_FORMAT': 'l, F j, Y',
    'HEADER_TIME_FORMAT': 'H:i',

    # menu
    'SEARCH_URL': '/admin/auth/user/',
    'MENU_ICONS': {
       'sites': 'icon-leaf',
       'auth': 'icon-lock',
    },
}

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
    # uncomment below for debug_toolbar. 
    # you'll need to install "django-debug-toolbar" first
    #'debug_toolbar',
)

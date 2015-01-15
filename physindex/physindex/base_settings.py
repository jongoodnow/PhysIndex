import os
from django.conf.global_settings import TEMPLATE_CONTEXT_PROCESSORS as TCP
from unipath import FSPath as Path

BASE = Path(__file__).absolute().ancestor(2)

TIME_ZONE = 'America/New_York'

LANGUAGE_CODE = 'en-us'

SITE_ID = 1

USE_I18N = True

USE_L10N = True

USE_TZ = True

MEDIA_ROOT = BASE.child('media')

MEDIA_URL = '/m/'

TEST_RUNNER = 'django.test.runner.DiscoverRunner'

STATIC_ROOT = BASE

STATIC_URL = '/static/'

STATICFILES_DIRS = (BASE.ancestor(1).child('wsgi').child('static'),)

STATICFILES_FINDERS = (
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
)

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
    'SEARCH_URL': '',
    'MENU_ICONS': {
       'sites': 'icon-leaf',
       'auth': 'icon-lock',
    },
}



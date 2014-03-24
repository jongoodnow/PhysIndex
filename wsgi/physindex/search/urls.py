from django.conf.urls import patterns, url

from search import views

urlpatterns = patterns('',
    url(r'^$', views.search, name='search'),
    url(r'^v/(?P<name>[\S\s]+)/$', views.variable, name='variable'),
    url(r'^e/(?P<name>[\S\s]+)/$', views.equation, name='equation'),
    url(r'^u/(?P<name>[\S\s]+)/$', views.unit, name='unit'),
    url(r'^features/$', views.help, name='help'),
    url(r'^about/$', views.about, name='about'),
    url(r'^contact/$', views.contact, name='contact'),
    url(r'^references/$', views.references, name='references'),
    url(r'^beta/$', views.beta, name='beta'),
    url(r"^spreadsheets/(?P<model_name>\w+)/$", views.spreadsheet, name="spreadsheet"),
)
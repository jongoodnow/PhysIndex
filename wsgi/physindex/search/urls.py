from django.conf.urls import patterns, url

from search import views

urlpatterns = patterns('',
    url(r'^$', views.search, name='search'),
    url(r'^(?P<cls>[veu])/(?P<name>.+)/$', views.indiv, name='indiv'),
    url(r'^e/(?P<name>.+)/$', views.equation, name='equation'),
    url(r'^u/(?P<name>.+)/$', views.unit, name='unit'),
    url(r'^features/$', views.help, name='help'),
    url(r'^about/$', views.about, name='about'),
    url(r'^contact/$', views.contact, name='contact'),
    url(r'^references/$', views.references, name='references'),
    url(r'^beta/$', views.beta, name='beta'),

    # super secret pages

    url(r'^admin/spreadsheets/(?P<model_name>\w+)/$', views.spreadsheet, 
        name="spreadsheet"),
    url(r'^admin/queue/$', views.adminqueue, name="adminqueue"),
    url(r'^admin/queue/revise/(?P<cls>[veu])/(?P<name>.+)/$', views.set_revised, 
        name="set_revised"),
)
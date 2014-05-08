from django.conf.urls import patterns, url

from search import views

urlpatterns = patterns('',
    url(r'^$', views.search, name='search'),
    url(r'^(?P<cls>[veu])/(?P<name>.+)/$', views.indiv, name='indiv'),
    url(r'^features/$', views.features, name='features'),
    url(r'^about/$', views.about, name='about'),
    url(r'^contact/$', views.contact, name='contact'),
    url(r'^beta/$', views.beta, name='beta'),

    # super secret pages

    url(r'^admin/spreadsheets/(?P<model_name>\w+)/$', views.spreadsheet, 
        name="spreadsheet"),
    url(r'^admin/queue/$', views.adminqueue, name="adminqueue"),
    url(r'^admin/queue/revise/(?P<cls>[veu])/(?P<name>.+)/$', views.set_revised, 
        name="set_revised"),
)
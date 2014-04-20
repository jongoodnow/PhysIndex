from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

from search import views

urlpatterns = patterns('',
	url(r'^', include('search.urls')),
    url(r'^admin/doc/', include('django.contrib.admindocs.urls')),
    url(r'^admin/', include(admin.site.urls)),
)

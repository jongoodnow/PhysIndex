from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

from search import views

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'physindex.views.home', name='home'),
    # url(r'^physindex/', include('physindex.foo.urls')),
	
	url(r'^', include('search.urls')),
    # Uncomment the admin/doc line below to enable admin documentation:
    url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),
)

# -*- coding: utf-8 -*-
import datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding field 'Equation.description_url'
        db.add_column(u'search_equation', 'description_url',
                      self.gf('django.db.models.fields.URLField')(default='', max_length=200, blank=True),
                      keep_default=False)

        # Adding field 'Variable.description_url'
        db.add_column(u'search_variable', 'description_url',
                      self.gf('django.db.models.fields.URLField')(default='', max_length=200, blank=True),
                      keep_default=False)

        # Adding field 'Unit.description_url'
        db.add_column(u'search_unit', 'description_url',
                      self.gf('django.db.models.fields.URLField')(default='', max_length=200, blank=True),
                      keep_default=False)


    def backwards(self, orm):
        # Deleting field 'Equation.description_url'
        db.delete_column(u'search_equation', 'description_url')

        # Deleting field 'Variable.description_url'
        db.delete_column(u'search_variable', 'description_url')

        # Deleting field 'Unit.description_url'
        db.delete_column(u'search_unit', 'description_url')


    models = {
        u'search.equation': {
            'Meta': {'object_name': 'Equation'},
            'author': ('django.db.models.fields.CharField', [], {'default': "'anon'", 'max_length': '100', 'blank': 'True'}),
            'defined_var': ('django.db.models.fields.related.OneToOneField', [], {'blank': 'True', 'related_name': "'definition'", 'unique': 'True', 'null': 'True', 'to': u"orm['search.Variable']"}),
            'description': ('django.db.models.fields.CharField', [], {'max_length': '1000', 'blank': 'True'}),
            'description_url': ('django.db.models.fields.URLField', [], {'max_length': '200', 'blank': 'True'}),
            'full_name': ('django.db.models.fields.CharField', [], {'unique': 'True', 'max_length': '200'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'pub_date': ('django.db.models.fields.DateTimeField', [], {'default': 'datetime.datetime(2014, 5, 9, 0, 0)'}),
            'quick_name': ('django.db.models.fields.CharField', [], {'max_length': '200'}),
            'representation': ('django.db.models.fields.CharField', [], {'max_length': '1000', 'blank': 'True'}),
            'search_terms': ('django.db.models.fields.related.ManyToManyField', [], {'to': u"orm['search.SearchTerm']", 'symmetrical': 'False', 'blank': 'True'}),
            'subjects': ('django.db.models.fields.related.ManyToManyField', [], {'to': u"orm['search.Subject']", 'symmetrical': 'False', 'blank': 'True'}),
            'variables': ('django.db.models.fields.related.ManyToManyField', [], {'related_name': "'equation_set'", 'symmetrical': 'False', 'to': u"orm['search.Variable']"}),
            'was_revised': ('django.db.models.fields.BooleanField', [], {'default': 'False'})
        },
        u'search.querylog': {
            'Meta': {'object_name': 'QueryLog'},
            'count': ('django.db.models.fields.IntegerField', [], {'default': '1'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'most_recent_lookup': ('django.db.models.fields.DateTimeField', [], {}),
            'query': ('django.db.models.fields.CharField', [], {'max_length': '200'})
        },
        u'search.searchterm': {
            'Meta': {'object_name': 'SearchTerm'},
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'term': ('django.db.models.fields.CharField', [], {'max_length': '400'})
        },
        u'search.subject': {
            'Meta': {'object_name': 'Subject'},
            'author': ('django.db.models.fields.CharField', [], {'default': "'anon'", 'max_length': '100', 'blank': 'True'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'pub_date': ('django.db.models.fields.DateTimeField', [], {'default': 'datetime.datetime(2014, 5, 9, 0, 0)'}),
            'title': ('django.db.models.fields.CharField', [], {'max_length': '200'})
        },
        u'search.unit': {
            'Meta': {'object_name': 'Unit'},
            'author': ('django.db.models.fields.CharField', [], {'default': "'anon'", 'max_length': '100', 'blank': 'True'}),
            'composition': ('django.db.models.fields.CharField', [], {'max_length': '1000', 'blank': 'True'}),
            'composition_links': ('django.db.models.fields.related.ManyToManyField', [], {'related_name': "'composition_links_rel_+'", 'blank': 'True', 'to': u"orm['search.Unit']"}),
            'description': ('django.db.models.fields.CharField', [], {'max_length': '1000', 'blank': 'True'}),
            'description_url': ('django.db.models.fields.URLField', [], {'max_length': '200', 'blank': 'True'}),
            'full_name': ('django.db.models.fields.CharField', [], {'unique': 'True', 'max_length': '200'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'pub_date': ('django.db.models.fields.DateTimeField', [], {'default': 'datetime.datetime(2014, 5, 9, 0, 0)'}),
            'quick_name': ('django.db.models.fields.CharField', [], {'max_length': '200'}),
            'representation': ('django.db.models.fields.CharField', [], {'max_length': '1000', 'blank': 'True'}),
            'search_terms': ('django.db.models.fields.related.ManyToManyField', [], {'to': u"orm['search.SearchTerm']", 'symmetrical': 'False', 'blank': 'True'}),
            'subjects': ('django.db.models.fields.related.ManyToManyField', [], {'to': u"orm['search.Subject']", 'symmetrical': 'False', 'blank': 'True'}),
            'was_revised': ('django.db.models.fields.BooleanField', [], {'default': 'False'})
        },
        u'search.variable': {
            'Meta': {'object_name': 'Variable'},
            'author': ('django.db.models.fields.CharField', [], {'default': "'anon'", 'max_length': '100', 'blank': 'True'}),
            'description': ('django.db.models.fields.CharField', [], {'max_length': '1000', 'blank': 'True'}),
            'description_url': ('django.db.models.fields.URLField', [], {'max_length': '200', 'blank': 'True'}),
            'full_name': ('django.db.models.fields.CharField', [], {'unique': 'True', 'max_length': '200'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'pub_date': ('django.db.models.fields.DateTimeField', [], {'default': 'datetime.datetime(2014, 5, 9, 0, 0)'}),
            'quick_name': ('django.db.models.fields.CharField', [], {'max_length': '200'}),
            'representation': ('django.db.models.fields.CharField', [], {'max_length': '1000', 'blank': 'True'}),
            'search_terms': ('django.db.models.fields.related.ManyToManyField', [], {'to': u"orm['search.SearchTerm']", 'symmetrical': 'False', 'blank': 'True'}),
            'subjects': ('django.db.models.fields.related.ManyToManyField', [], {'to': u"orm['search.Subject']", 'symmetrical': 'False', 'blank': 'True'}),
            'units': ('django.db.models.fields.CharField', [], {'default': "'none'", 'max_length': '1000', 'blank': 'True'}),
            'units_links': ('django.db.models.fields.related.ManyToManyField', [], {'to': u"orm['search.Unit']", 'symmetrical': 'False', 'blank': 'True'}),
            'was_revised': ('django.db.models.fields.BooleanField', [], {'default': 'False'})
        }
    }

    complete_apps = ['search']
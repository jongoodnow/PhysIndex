# -*- coding: utf-8 -*-
import datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Deleting field 'Subject.title1'
        db.delete_column(u'search_subject', 'title1')

        # Adding field 'Subject.title'
        db.add_column(u'search_subject', 'title',
                      self.gf('django.db.models.fields.CharField')(default='', max_length=200),
                      keep_default=False)


    def backwards(self, orm):
        # Adding field 'Subject.title1'
        db.add_column(u'search_subject', 'title1',
                      self.gf('django.db.models.fields.CharField')(default='', max_length=200),
                      keep_default=False)

        # Deleting field 'Subject.title'
        db.delete_column(u'search_subject', 'title')


    models = {
        u'search.equation': {
            'Meta': {'object_name': 'Equation'},
            'author': ('django.db.models.fields.CharField', [], {'default': "'anon'", 'max_length': '100'}),
            'cited': ('django.db.models.fields.related.ManyToManyField', [], {'to': u"orm['search.Source']", 'symmetrical': 'False'}),
            'cited_pages': ('django.db.models.fields.CharField', [], {'default': "'0'", 'max_length': '50'}),
            'defined_var': ('django.db.models.fields.related.OneToOneField', [], {'to': u"orm['search.Variable']", 'unique': 'True', 'null': 'True', 'blank': 'True'}),
            'description': ('django.db.models.fields.CharField', [], {'max_length': '1000'}),
            'full_name': ('django.db.models.fields.CharField', [], {'unique': 'True', 'max_length': '200'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'pub_date': ('django.db.models.fields.DateTimeField', [], {}),
            'quick_name': ('django.db.models.fields.CharField', [], {'max_length': '200'}),
            'representation': ('django.db.models.fields.CharField', [], {'max_length': '1000'}),
            'search_terms': ('django.db.models.fields.related.ManyToManyField', [], {'to': u"orm['search.SearchTerm']", 'symmetrical': 'False'}),
            'subjects': ('django.db.models.fields.related.ManyToManyField', [], {'to': u"orm['search.Subject']", 'symmetrical': 'False'}),
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
        u'search.source': {
            'Meta': {'object_name': 'Source'},
            'add_date': ('django.db.models.fields.DateTimeField', [], {}),
            'authors': ('django.db.models.fields.CharField', [], {'max_length': '200'}),
            'edition': ('django.db.models.fields.IntegerField', [], {'default': '0'}),
            'entered_by': ('django.db.models.fields.CharField', [], {'max_length': '100'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'identifier': ('django.db.models.fields.CharField', [], {'default': "'-3'", 'max_length': '20'}),
            'pub_city': ('django.db.models.fields.CharField', [], {'max_length': '200'}),
            'publisher': ('django.db.models.fields.CharField', [], {'max_length': '200'}),
            'title': ('django.db.models.fields.CharField', [], {'max_length': '200'}),
            'year': ('django.db.models.fields.CharField', [], {'max_length': '10'})
        },
        u'search.subject': {
            'Meta': {'object_name': 'Subject'},
            'author': ('django.db.models.fields.CharField', [], {'default': "'anon'", 'max_length': '100'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'pub_date': ('django.db.models.fields.DateTimeField', [], {}),
            'title': ('django.db.models.fields.CharField', [], {'max_length': '200'})
        },
        u'search.unit': {
            'Meta': {'object_name': 'Unit'},
            'author': ('django.db.models.fields.CharField', [], {'default': "'anon'", 'max_length': '100'}),
            'cited': ('django.db.models.fields.related.ManyToManyField', [], {'to': u"orm['search.Source']", 'symmetrical': 'False'}),
            'cited_pages': ('django.db.models.fields.CharField', [], {'default': "'0'", 'max_length': '50'}),
            'composition': ('django.db.models.fields.CharField', [], {'max_length': '1000'}),
            'composition_links': ('django.db.models.fields.related.ManyToManyField', [], {'related_name': "'composition_links_rel_+'", 'to': u"orm['search.Unit']"}),
            'description': ('django.db.models.fields.CharField', [], {'max_length': '1000'}),
            'full_name': ('django.db.models.fields.CharField', [], {'unique': 'True', 'max_length': '200'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'pub_date': ('django.db.models.fields.DateTimeField', [], {}),
            'quick_name': ('django.db.models.fields.CharField', [], {'max_length': '200'}),
            'representation': ('django.db.models.fields.CharField', [], {'max_length': '1000'}),
            'search_terms': ('django.db.models.fields.related.ManyToManyField', [], {'to': u"orm['search.SearchTerm']", 'symmetrical': 'False'}),
            'subjects': ('django.db.models.fields.related.ManyToManyField', [], {'to': u"orm['search.Subject']", 'symmetrical': 'False'}),
            'was_revised': ('django.db.models.fields.BooleanField', [], {'default': 'False'})
        },
        u'search.variable': {
            'Meta': {'object_name': 'Variable'},
            'author': ('django.db.models.fields.CharField', [], {'default': "'anon'", 'max_length': '100'}),
            'cited': ('django.db.models.fields.related.ManyToManyField', [], {'to': u"orm['search.Source']", 'symmetrical': 'False'}),
            'cited_pages': ('django.db.models.fields.CharField', [], {'default': "'0'", 'max_length': '50'}),
            'description': ('django.db.models.fields.CharField', [], {'max_length': '1000'}),
            'full_name': ('django.db.models.fields.CharField', [], {'unique': 'True', 'max_length': '200'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'pub_date': ('django.db.models.fields.DateTimeField', [], {}),
            'quick_name': ('django.db.models.fields.CharField', [], {'max_length': '200'}),
            'representation': ('django.db.models.fields.CharField', [], {'max_length': '1000'}),
            'search_terms': ('django.db.models.fields.related.ManyToManyField', [], {'to': u"orm['search.SearchTerm']", 'symmetrical': 'False'}),
            'subjects': ('django.db.models.fields.related.ManyToManyField', [], {'to': u"orm['search.Subject']", 'symmetrical': 'False'}),
            'units': ('django.db.models.fields.CharField', [], {'default': "'none'", 'max_length': '1000'}),
            'units_links': ('django.db.models.fields.related.ManyToManyField', [], {'to': u"orm['search.Unit']", 'symmetrical': 'False'}),
            'was_revised': ('django.db.models.fields.BooleanField', [], {'default': 'False'})
        }
    }

    complete_apps = ['search']
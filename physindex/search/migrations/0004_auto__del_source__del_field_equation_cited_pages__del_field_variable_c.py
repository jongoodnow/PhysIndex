# -*- coding: utf-8 -*-
import datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Deleting model 'Source'
        db.delete_table(u'search_source')

        # Deleting field 'Equation.cited_pages'
        db.delete_column(u'search_equation', 'cited_pages')

        # Removing M2M table for field cited on 'Equation'
        db.delete_table(db.shorten_name(u'search_equation_cited'))

        # Deleting field 'Variable.cited_pages'
        db.delete_column(u'search_variable', 'cited_pages')

        # Removing M2M table for field cited on 'Variable'
        db.delete_table(db.shorten_name(u'search_variable_cited'))

        # Deleting field 'Unit.cited_pages'
        db.delete_column(u'search_unit', 'cited_pages')

        # Removing M2M table for field cited on 'Unit'
        db.delete_table(db.shorten_name(u'search_unit_cited'))


    def backwards(self, orm):
        # Adding model 'Source'
        db.create_table(u'search_source', (
            ('authors', self.gf('django.db.models.fields.CharField')(max_length=200)),
            ('edition', self.gf('django.db.models.fields.IntegerField')(default=0)),
            ('year', self.gf('django.db.models.fields.CharField')(max_length=10)),
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('publisher', self.gf('django.db.models.fields.CharField')(max_length=200)),
            ('title', self.gf('django.db.models.fields.CharField')(max_length=200)),
            ('add_date', self.gf('django.db.models.fields.DateTimeField')()),
            ('pub_city', self.gf('django.db.models.fields.CharField')(max_length=200)),
            ('identifier', self.gf('django.db.models.fields.CharField')(default='-3', max_length=20)),
            ('entered_by', self.gf('django.db.models.fields.CharField')(max_length=100)),
        ))
        db.send_create_signal(u'search', ['Source'])

        # Adding field 'Equation.cited_pages'
        db.add_column(u'search_equation', 'cited_pages',
                      self.gf('django.db.models.fields.CharField')(default='0', max_length=50),
                      keep_default=False)

        # Adding M2M table for field cited on 'Equation'
        m2m_table_name = db.shorten_name(u'search_equation_cited')
        db.create_table(m2m_table_name, (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('equation', models.ForeignKey(orm[u'search.equation'], null=False)),
            ('source', models.ForeignKey(orm[u'search.source'], null=False))
        ))
        db.create_unique(m2m_table_name, ['equation_id', 'source_id'])

        # Adding field 'Variable.cited_pages'
        db.add_column(u'search_variable', 'cited_pages',
                      self.gf('django.db.models.fields.CharField')(default='0', max_length=50),
                      keep_default=False)

        # Adding M2M table for field cited on 'Variable'
        m2m_table_name = db.shorten_name(u'search_variable_cited')
        db.create_table(m2m_table_name, (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('variable', models.ForeignKey(orm[u'search.variable'], null=False)),
            ('source', models.ForeignKey(orm[u'search.source'], null=False))
        ))
        db.create_unique(m2m_table_name, ['variable_id', 'source_id'])

        # Adding field 'Unit.cited_pages'
        db.add_column(u'search_unit', 'cited_pages',
                      self.gf('django.db.models.fields.CharField')(default='0', max_length=50),
                      keep_default=False)

        # Adding M2M table for field cited on 'Unit'
        m2m_table_name = db.shorten_name(u'search_unit_cited')
        db.create_table(m2m_table_name, (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('unit', models.ForeignKey(orm[u'search.unit'], null=False)),
            ('source', models.ForeignKey(orm[u'search.source'], null=False))
        ))
        db.create_unique(m2m_table_name, ['unit_id', 'source_id'])


    models = {
        u'search.equation': {
            'Meta': {'object_name': 'Equation'},
            'author': ('django.db.models.fields.CharField', [], {'default': "'anon'", 'max_length': '100', 'blank': 'True'}),
            'defined_var': ('django.db.models.fields.related.OneToOneField', [], {'blank': 'True', 'related_name': "'definition'", 'unique': 'True', 'null': 'True', 'to': u"orm['search.Variable']"}),
            'description': ('django.db.models.fields.CharField', [], {'max_length': '1000', 'blank': 'True'}),
            'full_name': ('django.db.models.fields.CharField', [], {'unique': 'True', 'max_length': '200'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'pub_date': ('django.db.models.fields.DateTimeField', [], {'default': 'datetime.datetime(2014, 5, 7, 0, 0)'}),
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
            'pub_date': ('django.db.models.fields.DateTimeField', [], {'default': 'datetime.datetime(2014, 5, 7, 0, 0)'}),
            'title': ('django.db.models.fields.CharField', [], {'max_length': '200'})
        },
        u'search.unit': {
            'Meta': {'object_name': 'Unit'},
            'author': ('django.db.models.fields.CharField', [], {'default': "'anon'", 'max_length': '100', 'blank': 'True'}),
            'composition': ('django.db.models.fields.CharField', [], {'max_length': '1000', 'blank': 'True'}),
            'composition_links': ('django.db.models.fields.related.ManyToManyField', [], {'related_name': "'composition_links_rel_+'", 'blank': 'True', 'to': u"orm['search.Unit']"}),
            'description': ('django.db.models.fields.CharField', [], {'max_length': '1000', 'blank': 'True'}),
            'full_name': ('django.db.models.fields.CharField', [], {'unique': 'True', 'max_length': '200'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'pub_date': ('django.db.models.fields.DateTimeField', [], {'default': 'datetime.datetime(2014, 5, 7, 0, 0)'}),
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
            'full_name': ('django.db.models.fields.CharField', [], {'unique': 'True', 'max_length': '200'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'pub_date': ('django.db.models.fields.DateTimeField', [], {'default': 'datetime.datetime(2014, 5, 7, 0, 0)'}),
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
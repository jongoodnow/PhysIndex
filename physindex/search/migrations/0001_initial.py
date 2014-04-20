# -*- coding: utf-8 -*-
import datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding model 'Subject'
        db.create_table(u'search_subject', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('title', self.gf('django.db.models.fields.CharField')(max_length=200)),
            ('pub_date', self.gf('django.db.models.fields.DateTimeField')()),
            ('author', self.gf('django.db.models.fields.CharField')(default='anon', max_length=100)),
        ))
        db.send_create_signal(u'search', ['Subject'])

        # Adding model 'SearchTerm'
        db.create_table(u'search_searchterm', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('term', self.gf('django.db.models.fields.CharField')(max_length=400)),
        ))
        db.send_create_signal(u'search', ['SearchTerm'])

        # Adding model 'Source'
        db.create_table(u'search_source', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('title', self.gf('django.db.models.fields.CharField')(max_length=200)),
            ('edition', self.gf('django.db.models.fields.IntegerField')(default=0)),
            ('authors', self.gf('django.db.models.fields.CharField')(max_length=200)),
            ('publisher', self.gf('django.db.models.fields.CharField')(max_length=200)),
            ('pub_city', self.gf('django.db.models.fields.CharField')(max_length=200)),
            ('year', self.gf('django.db.models.fields.CharField')(max_length=10)),
            ('identifier', self.gf('django.db.models.fields.CharField')(default='-3', max_length=20)),
            ('add_date', self.gf('django.db.models.fields.DateTimeField')()),
            ('entered_by', self.gf('django.db.models.fields.CharField')(max_length=100)),
        ))
        db.send_create_signal(u'search', ['Source'])

        # Adding model 'Unit'
        db.create_table(u'search_unit', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('quick_name', self.gf('django.db.models.fields.CharField')(max_length=200)),
            ('representation', self.gf('django.db.models.fields.CharField')(max_length=1000)),
            ('full_name', self.gf('django.db.models.fields.CharField')(unique=True, max_length=200)),
            ('description', self.gf('django.db.models.fields.CharField')(max_length=1000)),
            ('cited_pages', self.gf('django.db.models.fields.CharField')(default='0', max_length=50)),
            ('pub_date', self.gf('django.db.models.fields.DateTimeField')()),
            ('was_revised', self.gf('django.db.models.fields.BooleanField')(default=False)),
            ('author', self.gf('django.db.models.fields.CharField')(default='anon', max_length=100)),
            ('composition', self.gf('django.db.models.fields.CharField')(max_length=1000)),
        ))
        db.send_create_signal(u'search', ['Unit'])

        # Adding M2M table for field cited on 'Unit'
        m2m_table_name = db.shorten_name(u'search_unit_cited')
        db.create_table(m2m_table_name, (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('unit', models.ForeignKey(orm[u'search.unit'], null=False)),
            ('source', models.ForeignKey(orm[u'search.source'], null=False))
        ))
        db.create_unique(m2m_table_name, ['unit_id', 'source_id'])

        # Adding M2M table for field subjects on 'Unit'
        m2m_table_name = db.shorten_name(u'search_unit_subjects')
        db.create_table(m2m_table_name, (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('unit', models.ForeignKey(orm[u'search.unit'], null=False)),
            ('subject', models.ForeignKey(orm[u'search.subject'], null=False))
        ))
        db.create_unique(m2m_table_name, ['unit_id', 'subject_id'])

        # Adding M2M table for field search_terms on 'Unit'
        m2m_table_name = db.shorten_name(u'search_unit_search_terms')
        db.create_table(m2m_table_name, (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('unit', models.ForeignKey(orm[u'search.unit'], null=False)),
            ('searchterm', models.ForeignKey(orm[u'search.searchterm'], null=False))
        ))
        db.create_unique(m2m_table_name, ['unit_id', 'searchterm_id'])

        # Adding M2M table for field composition_links on 'Unit'
        m2m_table_name = db.shorten_name(u'search_unit_composition_links')
        db.create_table(m2m_table_name, (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('from_unit', models.ForeignKey(orm[u'search.unit'], null=False)),
            ('to_unit', models.ForeignKey(orm[u'search.unit'], null=False))
        ))
        db.create_unique(m2m_table_name, ['from_unit_id', 'to_unit_id'])

        # Adding model 'Variable'
        db.create_table(u'search_variable', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('quick_name', self.gf('django.db.models.fields.CharField')(max_length=200)),
            ('representation', self.gf('django.db.models.fields.CharField')(max_length=1000)),
            ('full_name', self.gf('django.db.models.fields.CharField')(unique=True, max_length=200)),
            ('description', self.gf('django.db.models.fields.CharField')(max_length=1000)),
            ('cited_pages', self.gf('django.db.models.fields.CharField')(default='0', max_length=50)),
            ('pub_date', self.gf('django.db.models.fields.DateTimeField')()),
            ('was_revised', self.gf('django.db.models.fields.BooleanField')(default=False)),
            ('author', self.gf('django.db.models.fields.CharField')(default='anon', max_length=100)),
            ('units', self.gf('django.db.models.fields.CharField')(default='none', max_length=1000)),
        ))
        db.send_create_signal(u'search', ['Variable'])

        # Adding M2M table for field cited on 'Variable'
        m2m_table_name = db.shorten_name(u'search_variable_cited')
        db.create_table(m2m_table_name, (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('variable', models.ForeignKey(orm[u'search.variable'], null=False)),
            ('source', models.ForeignKey(orm[u'search.source'], null=False))
        ))
        db.create_unique(m2m_table_name, ['variable_id', 'source_id'])

        # Adding M2M table for field subjects on 'Variable'
        m2m_table_name = db.shorten_name(u'search_variable_subjects')
        db.create_table(m2m_table_name, (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('variable', models.ForeignKey(orm[u'search.variable'], null=False)),
            ('subject', models.ForeignKey(orm[u'search.subject'], null=False))
        ))
        db.create_unique(m2m_table_name, ['variable_id', 'subject_id'])

        # Adding M2M table for field search_terms on 'Variable'
        m2m_table_name = db.shorten_name(u'search_variable_search_terms')
        db.create_table(m2m_table_name, (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('variable', models.ForeignKey(orm[u'search.variable'], null=False)),
            ('searchterm', models.ForeignKey(orm[u'search.searchterm'], null=False))
        ))
        db.create_unique(m2m_table_name, ['variable_id', 'searchterm_id'])

        # Adding M2M table for field units_links on 'Variable'
        m2m_table_name = db.shorten_name(u'search_variable_units_links')
        db.create_table(m2m_table_name, (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('variable', models.ForeignKey(orm[u'search.variable'], null=False)),
            ('unit', models.ForeignKey(orm[u'search.unit'], null=False))
        ))
        db.create_unique(m2m_table_name, ['variable_id', 'unit_id'])

        # Adding model 'Equation'
        db.create_table(u'search_equation', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('quick_name', self.gf('django.db.models.fields.CharField')(max_length=200)),
            ('representation', self.gf('django.db.models.fields.CharField')(max_length=1000)),
            ('full_name', self.gf('django.db.models.fields.CharField')(unique=True, max_length=200)),
            ('description', self.gf('django.db.models.fields.CharField')(max_length=1000)),
            ('cited_pages', self.gf('django.db.models.fields.CharField')(default='0', max_length=50)),
            ('pub_date', self.gf('django.db.models.fields.DateTimeField')()),
            ('was_revised', self.gf('django.db.models.fields.BooleanField')(default=False)),
            ('author', self.gf('django.db.models.fields.CharField')(default='anon', max_length=100)),
            ('defined_var', self.gf('django.db.models.fields.related.OneToOneField')(to=orm['search.Variable'], unique=True, null=True, blank=True)),
        ))
        db.send_create_signal(u'search', ['Equation'])

        # Adding M2M table for field cited on 'Equation'
        m2m_table_name = db.shorten_name(u'search_equation_cited')
        db.create_table(m2m_table_name, (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('equation', models.ForeignKey(orm[u'search.equation'], null=False)),
            ('source', models.ForeignKey(orm[u'search.source'], null=False))
        ))
        db.create_unique(m2m_table_name, ['equation_id', 'source_id'])

        # Adding M2M table for field subjects on 'Equation'
        m2m_table_name = db.shorten_name(u'search_equation_subjects')
        db.create_table(m2m_table_name, (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('equation', models.ForeignKey(orm[u'search.equation'], null=False)),
            ('subject', models.ForeignKey(orm[u'search.subject'], null=False))
        ))
        db.create_unique(m2m_table_name, ['equation_id', 'subject_id'])

        # Adding M2M table for field search_terms on 'Equation'
        m2m_table_name = db.shorten_name(u'search_equation_search_terms')
        db.create_table(m2m_table_name, (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('equation', models.ForeignKey(orm[u'search.equation'], null=False)),
            ('searchterm', models.ForeignKey(orm[u'search.searchterm'], null=False))
        ))
        db.create_unique(m2m_table_name, ['equation_id', 'searchterm_id'])

        # Adding M2M table for field variables on 'Equation'
        m2m_table_name = db.shorten_name(u'search_equation_variables')
        db.create_table(m2m_table_name, (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('equation', models.ForeignKey(orm[u'search.equation'], null=False)),
            ('variable', models.ForeignKey(orm[u'search.variable'], null=False))
        ))
        db.create_unique(m2m_table_name, ['equation_id', 'variable_id'])

        # Adding model 'QueryLog'
        db.create_table(u'search_querylog', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('query', self.gf('django.db.models.fields.CharField')(max_length=200)),
            ('count', self.gf('django.db.models.fields.IntegerField')(default=1)),
            ('most_recent_lookup', self.gf('django.db.models.fields.DateTimeField')()),
        ))
        db.send_create_signal(u'search', ['QueryLog'])


    def backwards(self, orm):
        # Deleting model 'Subject'
        db.delete_table(u'search_subject')

        # Deleting model 'SearchTerm'
        db.delete_table(u'search_searchterm')

        # Deleting model 'Source'
        db.delete_table(u'search_source')

        # Deleting model 'Unit'
        db.delete_table(u'search_unit')

        # Removing M2M table for field cited on 'Unit'
        db.delete_table(db.shorten_name(u'search_unit_cited'))

        # Removing M2M table for field subjects on 'Unit'
        db.delete_table(db.shorten_name(u'search_unit_subjects'))

        # Removing M2M table for field search_terms on 'Unit'
        db.delete_table(db.shorten_name(u'search_unit_search_terms'))

        # Removing M2M table for field composition_links on 'Unit'
        db.delete_table(db.shorten_name(u'search_unit_composition_links'))

        # Deleting model 'Variable'
        db.delete_table(u'search_variable')

        # Removing M2M table for field cited on 'Variable'
        db.delete_table(db.shorten_name(u'search_variable_cited'))

        # Removing M2M table for field subjects on 'Variable'
        db.delete_table(db.shorten_name(u'search_variable_subjects'))

        # Removing M2M table for field search_terms on 'Variable'
        db.delete_table(db.shorten_name(u'search_variable_search_terms'))

        # Removing M2M table for field units_links on 'Variable'
        db.delete_table(db.shorten_name(u'search_variable_units_links'))

        # Deleting model 'Equation'
        db.delete_table(u'search_equation')

        # Removing M2M table for field cited on 'Equation'
        db.delete_table(db.shorten_name(u'search_equation_cited'))

        # Removing M2M table for field subjects on 'Equation'
        db.delete_table(db.shorten_name(u'search_equation_subjects'))

        # Removing M2M table for field search_terms on 'Equation'
        db.delete_table(db.shorten_name(u'search_equation_search_terms'))

        # Removing M2M table for field variables on 'Equation'
        db.delete_table(db.shorten_name(u'search_equation_variables'))

        # Deleting model 'QueryLog'
        db.delete_table(u'search_querylog')


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
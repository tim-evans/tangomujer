import DS from 'ember-data';
import { computed, get } from '@ember/object';

const { attr, hasMany } = DS;

export default DS.Model.extend({
  title: attr('string'),
  body: attr('string'),
  slug: attr('string'),
  pinned: attr('boolean'),
  publishedAt: attr('date'),
  writtenBy: hasMany('author'),

  mobiledoc: computed('body', function () {
    return JSON.parse(get(this, 'body'));
  })
});

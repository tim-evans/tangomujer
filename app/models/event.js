import DS from 'ember-data';
import { computed } from '@ember/object';

const { attr, belongsTo, hasMany } = DS;

export default DS.Model.extend({
  title: attr('string'),
  description: attr('string'),
  venue: belongsTo('venue'),
  startsAt: attr('date'),
  endsAt: attr('date'),

  mobiledoc: computed('description', function () {
    return JSON.parse(this.description);
  })
});

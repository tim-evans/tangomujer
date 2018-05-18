import DS from 'ember-data';

const { attr, belongsTo, hasMany } = DS;

export default DS.Model.extend({
  name: attr('string'),
  email: attr('string'),
  biography: attr('string'),
  website: attr('string')
});

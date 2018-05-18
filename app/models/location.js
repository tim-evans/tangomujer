import DS from 'ember-data';

const { attr, belongsTo } = DS;

export default DS.Model.extend({
  photo: belongsTo('photo'),
  name: attr('string'),
  website: attr('string'),
  addressLine: attr('string'),
  extendedAddress: attr('string'),
  city: attr('string'),
  regionCode: attr('string'),
  postalCode: attr('string'),
  latitude: attr('string'),
  longitude: attr('string')
});

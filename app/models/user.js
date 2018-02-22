import DS from 'ember-data';

export default DS.Model.extend({
  username:DS.attr('string'),
  fullname:DS.attr('string'),
  rol:DS.attr('string')
});

import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr('string'),
  dateCreated: DS.attr('number'),
  status: DS.attr('string')
});

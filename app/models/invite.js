import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr('string'),
  dateCreated: DS.attr('date'),
  status: DS.attr('string')
});

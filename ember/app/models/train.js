import Ember from 'ember';
import DS from 'ember-data';

// export default Ember.Object.extend({
// 	line: '',
// 	departs: '',
// 	arrives: ''
// });

export default DS.Model.extend({
	line: DS.attr('string'),
	departs: DS.attr(),
	arrives: DS.attr()
});
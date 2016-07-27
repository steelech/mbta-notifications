import Ember from 'ember';
import DS from 'ember-data';

// export default Ember.Object.extend({
// 	line: '',
// 	departs: '',
// 	arrives: ''
// });

export default DS.Model.extend({
	trip_id: DS.attr(),
	trip_name: DS.attr(),
        stops: DS.hasMany('stop')

});
import Ember from 'ember';
import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

// export default DS.Model.extend({

// });

// export default Ember.Object.extend({
// 	route_id: '',
// 	route_name: ''
// });

export default DS.Model.extend({
	Id: DS.attr(),
	Name: DS.attr(),
	trips: DS.hasMany("trip")

});
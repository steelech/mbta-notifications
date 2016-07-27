import Ember from 'ember';
import Search from '../models/search';

export default Ember.Route.extend({
	model: function() {
		// var kingston1 = Search.create({
		// 	route_id: "CR-Kingston1",
		// 	route_name: "Kingston/Plymouth Line1"
		// });

		// var kingston2 = Search.create({
		// 	route_id: "CR-Kingston2",
		// 	route_name: "Kingston/Plymouth Line2"
		// });

		// return [kingston1, kingston2];
		return this.store.findAll('search');
	}
});

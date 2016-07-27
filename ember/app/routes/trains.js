import Ember from 'ember';
import Train from '../models/train';


export default Ember.Route.extend({
	model: function() {
		// var greenBush = Train.create({
		// 	line: 'Greenbush',
		// 	departs: '8:09',
		// 	arrives: '8:46'
		// });

		// var kingston = Train.create({
		// 	line: 'Kingston',
		// 	departs: '8:37',
		// 	arrives: '9:35'
		// });

		// return [greenBush, kingston];
		return this.store.findAll('train');
	}
});

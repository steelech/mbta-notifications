import Ember from 'ember';
import Line from '../models/line';

export default Ember.Route.extend({
	model: function() {
		var greenBush = Line.create({
			name: 'Greenbush'
		});

		var Kingston = Line.create({
			name: 'Kingston'
		});

		return [greenBush, Kingston];
	}
});

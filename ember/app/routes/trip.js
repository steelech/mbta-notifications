import Ember from 'ember';
import Trip from '../models/trip';

export default Ember.Route.extend({
	model: function() {
		return this.store.findAll('trip');
	}
});

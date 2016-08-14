import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		filterByTrip(param) {
                	var route_id = this.controllerFor("routes").get("routeId");
			if(param !== '') {
                                return this.store.query('trip', { trip_name: param, route_id: route_id });
			} else {
				return this.store.findAll('trip');
			}
		}
	}
});

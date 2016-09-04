import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return this.store.findAll('route');

	},
        actions: {
        	changeRoute(route_name, direction, id) {
                        if(direction == "Outbound")
                        {
                                direction = 0;
                        }
                        else 
                        {
                                direction = 1;
                        }
                        this.controllerFor('routes').set('routeId', id);
                        
                        console.log("changeRoute");
        	        this.transitionTo("routes.route.trips", id, {queryParams: { direction: direction }} );
        	}
        	
        }
});

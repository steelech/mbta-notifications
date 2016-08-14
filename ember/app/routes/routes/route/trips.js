import Ember from 'ember';

export default Ember.Route.extend({
		route: '',
		direction: '',
	renderTemplate: function() {
		this.render('routes.route.trips', {into: 'application'});
	},
	model(params) {
                this.set('direction', params.direction);
                var route = this.modelFor('routes.route');
                // var parentController = this.getControllerFor('routes.route');
                console.log("routeId:", this.controllerFor('routes').get('routeId'));
                console.log("direction: ", params.direction);
                this.controllerFor('routes.route.trips').set('route', this.controllerFor('routes').get('routeId'));
                this.controllerFor('routes.route.trips').set('direction', params.direction);

                return route;
	},

});

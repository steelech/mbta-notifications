import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		var routes = this.modelFor('routes');
		this.controllerFor('routes').set('routeId', params.id);
		return routes.findBy("id", params.id);
	}
});

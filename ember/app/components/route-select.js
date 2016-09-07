import Ember from 'ember';

export default Ember.Component.extend({
	value1: '',
        value2: '',
        id: '',
	overListElement: false,
	buttonClasses: "get-route-button",
	buttonClass: "hidden",
	// buttonClass: "get-route-button",
	disabled: false,
	direction: '',
	route_name: '',
	actions: {
		over: function() {
			this.set("buttonClass", this.get("buttonClasses"));
		},
		off: function() {
			this.set("buttonClass", "hidden");
		},
		selectRoute() {
			this.sendAction("selectRoute", this.get("route_name"), this.get("id"));

		},
		setRoute: function(param) {
			this.set('route_name', param);
		}
	}
});

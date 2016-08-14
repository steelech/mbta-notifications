import Ember from 'ember';

export default Ember.Component.extend({
	value1: '',
        value2: '',
        id: '',
	overListElement: false,
	buttonClasses: "btn btn-primary get-route-button",
	dropdownClasses: "",
	directionClasses: "directions",
	buttonClass: "hidden",
	dropdownClass: "hidden",
	directionClass: "hidden",
	disabled: false,
	direction: '',
	route_name: '',
	actions: {
		over: function() {
			this.set("buttonClass", this.get("buttonClasses"));
			this.set("dropdownClass", this.get("dropdownClasses"));
			this.set("directionClass", this.get("directionClasses"));
		},
		off: function() {
			this.set("buttonClass", "hidden");
			this.set("dropdownClass", "hidden");
			this.set("directionClass", "hidden");
		},
		setDirection: function(param) {
			this.set('direction', param);
                        this.sendAction("setDirection", this.get("route_name"), this.get('direction'), this.get('id'));
		},
		setRoute: function(param) {
			this.set('route_name', param);
		}
	}
});

import Ember from 'ember';

export default Ember.Component.extend({
	direction: '',
	trip_name: '',
	buttonClasses: "btn btn-primary",
	buttonClass: "hidden",
	overListElement: false,
	disabled: false,
	actions: {
		over: function() {
			this.set("buttonClass", this.get("buttonClasses"));
		},
		off: function() {
			this.set("buttonClass", "hidden");
		},
	}

});

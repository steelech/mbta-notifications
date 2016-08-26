import Ember from 'ember';

export default Ember.Component.extend({
	direction: '',
	trip_name: '',
	id: '',
	buttonClasses: "btn btn-primary",
	buttonClass: "hidden",
	// buttonClass: "btn btn-primary",
	overListElement: false,
	disabled: false,
	actions: {
		over: function() {
			this.set("buttonClass", this.get("buttonClasses"));
		},
		off: function() {
			this.set("buttonClass", "hidden");
		},
		setTrip: function(param) {
			this.sendAction("setTrip", this.get('trip_name'), this.get('id'));
		}
	}
});

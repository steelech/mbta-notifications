import Ember from 'ember';

export default Ember.Component.extend({
	contents: ["Inbound", "Outbound"],
	actions: {
		setDirection(param) {
			console.log("setting direction");
			this.sendAction("setDirection", param);

		}
        // value: getValue()
	}
});

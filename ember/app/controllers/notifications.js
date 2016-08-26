import Ember from 'ember';

export default Ember.Controller.extend({
	subscriptions: [],
	showSubscriptionsList: false,
	phoneNumber: '',
	ajax: Ember.inject.service(),
	actions: {
		setPhoneNumber(value) {
		    this.set('phoneNumber', value);
		},
		getSubscriptionsList() {
			// var subscriptions = this.get('store').query('subscription', { phone_number: this.get('phoneNumber') });
			this.set('subscriptions', this.get('store').query('subscription', { phone_number: this.get('phoneNumber') }));
			this.set("showSubscriptionsList", true);
		}  
	}
});
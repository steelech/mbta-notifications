import Ember from 'ember';

export default Ember.Controller.extend({
	subscriptions: [],
	showSubscriptionsList: false,
	phoneNumber: '',
	ajax: Ember.inject.service(),
	showModalDialog: false,
	deleteDialog: false,
	viewDialog: false,
	stops: [],
	trip_id: '',
	trip_name: '',
	subscription_id: '',
	subscriptionsReady: false,
	originalSize: '',
	actions: {
		setPhoneNumber(value) {
		    this.set('phoneNumber', value);
		},
		getSubscriptionsList() {
			this.set('subscriptions', this.get('store').query('subscription', { phone_number: this.get('phoneNumber') }));
			this.set("showSubscriptionsList", true);
		},
		showViewDialog(trip_id, trip_name) {
			this.set("viewDialog", true);
			this.set("trip_name", trip_name);
			this.set("stops", this.get("store").query("stop", { trip_id: this.get(trip_id) }))
		},
		showDeleteDialog(trip_id, trip_name, subscription_id) {
			this.set("deleteDialog", true);
			this.set("trip_name", trip_name);
			this.set("trip_id", trip_id);
			this.set("subscription_id", subscription_id);
		},
		closeViewDialog() {
			this.set("viewDialog", false);

		},
		closeDeleteDialog() {
			this.set("deleteDialog", false);
		},
		deleteSubscription() {
			this.set("deleteDialog", false);
			this.deleteSubscriptionFromBackend().then(subscription => this.removeSubscriptionFromArray(subscription));
		}
	},
	deleteSubscriptionFromBackend: function() {
		return this.get("store").find("subscription", this.get("subscription_id"));
	},
	removeSubscriptionFromArray: function(subscriptionToBeDeleted) {
		self = this;
		var newSubscriptionsArray = [];


		this.get("subscriptions").forEach(function(subscription) {
			if(subscriptionToBeDeleted.id != subscription.id) {
				newSubscriptionsArray.push(subscription);
			}
			self.set("subscriptions", newSubscriptionsArray);
			self.set("subscriptionsReady", false);
			self.set("subscriptionsReady", true);
		});
	},
});

































import Ember from 'ember';

export default Ember.Component.extend({
	viewButtonClasses: 'subscription-view-button',
	viewButtonClass: 'hidden',
	deleteButtonClasses: 'subscription-delete-button',
	deleteButtonClass: 'hidden',
	overListElement: false,
	showViewDialog: false,
	showDeleteDialog: false,
	actions: {
		over: function() {

			this.set("viewButtonClass", this.get("viewButtonClasses"));
			this.set("deleteButtonClass", this.get("deleteButtonClasses"));

		},
		off: function() {
			this.set("viewButtonClass", "hidden");
			this.set("deleteButtonClass", "hidden");
		},
		openViewDialog() {
			console.log("opening view dialog");
			this.set("showViewDialog", true);
		},

		openDeleteDialog() {
			console.log("opening delete dialog");
			this.set("showDeleteDialog", true);
		},
		filterSubscriptions() {

		}
	}
});

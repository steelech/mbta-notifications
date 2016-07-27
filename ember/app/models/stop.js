import Model from 'ember-data/model';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
	// trip: DS.belongsTo('trip')
	stop_id: DS.attr(),
	stop_name: DS.attr()
});

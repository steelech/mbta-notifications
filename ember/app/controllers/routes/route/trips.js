import Ember from 'ember';

export default Ember.Controller.extend({
        queryParams: ['direction'],
        trip_id: '',
        route: '',
        results: [],
        direction: '',
        showSchedule: false,
        stops: [],
        actions: {
                filterByTrip(input, direction) {

                    if(input == "")
                    {
                        return this.get('store').query("trip", { direction: this.get('direction'), route: this.get('route')});
                    }
                    else
                    {
                        return this.get('store').query("trip", { direction: this.get('direction'), route: this.get('route'), trip_name: input });
                    }
                },
                pickTrip(trip_name, trip_id) {
                    console.log("trip_name: ", trip_name);
                    console.log('trip_id: ', trip_id);
                    this.set('trip_id', trip_id);
                    this.set('showSchedule', true);
                    this.set('stops', this.get('store').query('stop', { trip_id: trip_id }));
                },         
        }
});

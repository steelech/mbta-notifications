import Ember from 'ember';

export default Ember.Controller.extend({
        queryParams: ['direction'],
        route: '',
        results: [],
        direction: '',
        actions: {
                filterByTrip(input, direction) {

                        if(input == "")
                        {
                          return this.get('store').query("trip", { direction: this.get('direction'), route: this.get('route')});

                        }
                        else
                        {
                          // return this.get('store').findAll("trip");
                          return this.get('store').query("trip", { direction: this.get('direction'), route: this.get('route'), trip_name: input });
                        }
                }
        }
});

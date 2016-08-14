import Ember from 'ember';

export default Ember.Controller.extend({
        queryParams: ['direction'],
        route: '',
        results: [],
        direction: '',
        actions: {
                getTrips() {
                        // console.log(this.get('model'));
                },
                filterByTrip(input, direction) {
                        console.log("direction: ", this.get('direction'));
                        console.log("route: ", this.get("route"));
                        var trips;
                        var tripsPromise = this.get('model').get('trips');
                        tripsPromise.then(function(trips) {
                           var tripArray = trips.map(function(record) {
                               return record.toJSON();
                             });

                           trips = tripArray;
                           return trips;
                        }).then(function(results) {
                          return results;
                        });



                        // console.log(this.get('results'));

                        // var tripsPromise


                        // return [];





                }
        }
});

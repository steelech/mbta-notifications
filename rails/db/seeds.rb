# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

stop = Stop.create 
stop.update_attribute(:stop_name, "Kingston")
stop.update_attribute(:stop_id, "kingston")
stop.update_attribute(:stop_sequence, 1)

trip = Trip.create 
trip.update_attribute(:trip_name, "Kingston morning")
trip.update_attribute(:trip_id, "kingston_morning")
trip.stops << stop
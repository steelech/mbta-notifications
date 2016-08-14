class Route < ActiveRecord::Base
	has_many :trips

        def parse_trips(raw_json)
        	raw_json["direction"].each do |direction|
                        direction_id = direction["direction_id"]
                        direction_name = direction["direction_name"]
        		direction["trip"].each do |trip|
                        	this_trip = Trip.create({:trip_name => trip["trip_name"], :trip_id => trip["trip_id"],
                                                         :direction_id => direction_id, :direction_name => direction_name})
                                this_trip.parse_stops(trip)
                                self.trips << this_trip


        		end
        	end

        end
end

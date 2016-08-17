class Trip < ActiveRecord::Base
	has_many :stops
        belongs_to :route

        def parse_stops(raw_json)
        	raw_json["stop"].each do |stop|
                        # if Time.at(stop["sch_dep_dt"].to_i).day == Time.new.day
                		self.stops.create({stop_sequence: stop["stop_sequence"],
                                				   stop_name: stop["stop_name"],
                                				   stop_id: stop["stop_id"],
                                				   stop_time: Time.at(stop["sch_dep_dt"].to_i).strftime("at %I:%M%p")})
                        # end
        	end
        end
end

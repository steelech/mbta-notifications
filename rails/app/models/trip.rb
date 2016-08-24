class Trip < ActiveRecord::Base
	has_many :stops
        belongs_to :route

        def parse_stops(raw_json)
                # stop_time = Time.at(stop["sch_dep_dt"].to_i).strftime("at %I:%M%p")})
        	raw_json["stop"].each do |stop|
                		self.stops.create({stop_sequence: stop["stop_sequence"],
                                				   stop_name: stop["stop_name"],
                                				   stop_id: stop["stop_id"],
                                				   stop_time: Time.at(stop["sch_dep_dt"].to_i).strftime("at %I:%M%p")})
        	end
        end

        # def format_stop_time(stop_time)
        #         # stop_time
        #         stop_time = Time.at(stop_time.to_i).strftime("at %I:%M%p").to_s
        #         if stop_time[3] == "0"
        #                 puts "hi"
        #                 stop_time[3] = ""
        #         end
        #         Time.at(stop_time)
        # end
end

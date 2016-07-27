class MbtaService
	include MBTA

	attr_accessor :params, :results, :names
        

	def get_routes(api_key: 'wX9NwuHnZU2ToO7GmGR9uw', route: 'CR-Kingston', max_time: 1440, format: 'json', max_trips: 100, direction: 1)
		@params = 	{
			:api_key => api_key,
			:route => route,
			:max_time => max_time,
			:format => format,
			:max_trips => max_time,
			:direction => direction
		}
		uri = URI('http://realtime.mbta.com/developer/api/v2/schedulebyroute?')
		uri.query = URI.encode_www_form(@params)

		res = Net::HTTP.get_response(uri)
		@results = JSON.parse(res.body)
		search_results = Search.new(@results)
		@results
             	puts @results

	end

        def get_route_names(api_key: 'wX9NwuHnZU2ToO7GmGR9uw')
        	@params = {
        		:api_key => api_key,
        		:format => 'json'
        	}

                uri = URI('http://realtime.mbta.com/developer/api/v2/routes?')
                uri.query = URI.encode_www_form(@params)
                res = Net::HTTP.get_response(uri)
                @results = JSON.parse(res.body)
                @results["mode"].each do |result|
                	if result["mode_name"] == "Commuter Rail"
                        	@names = result["route"].map do |route|
                                	route["route_id"]
                                end
                        end
                end

                @names
        end

        def self.get_schedule
            schedule = new
            schedule.get_route_names
        end
     
end
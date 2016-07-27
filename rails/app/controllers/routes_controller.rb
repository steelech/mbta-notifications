class RoutesController < ApplicationController

	def index
		routes = MbtaService.get_routes(api_key: 'wX9NwuHnZU2ToO7GmGR9uw', route: 'CR-Kingston', max_time: 1440, format: 'json', max_trips: 100, direction: 1)
		@my_routes = routes["direction"][0]["trip"].map do |trip|
			@route = Route.new(stop_id: trip["trip_name"])
		end
		render json: @my_routes, each_serializer: RouteSerializer

		# routes = File.read("tmp/search_results_example.json")
		# routes = JSON.parse(routes)
		# # puts routes

		# @my_routes = routes["direction"][0]["trip"].map do |trip|
		# 	@route = Route.new(stop_id: trip["trip_name"])
		# end
		# @my_routes.each do |route|
		# 	puts route.inspect
		# end

		# render json: @my_routes

	end

end

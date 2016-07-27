class SearchController < ApplicationController

	def index
        	# headers['Access-Control-Allow-Origin'] = '*'
		# routes = MbtaService.get_routes(api_key: 'wX9NwuHnZU2ToO7GmGR9uw', route: 'CR-Kingston', max_time: 1440, format: 'json', max_trips: 100, direction: 1)
		# @search_result = Search.new(routes)
		# render json: @search_result
                headers['Access-Control-Allow-Origin'] = '*'
                routes = JSON.parse(File.read('tmp/search_results_example.json'))
                @search_result = Search.new(routes)
                render json: @search_result
	end
end

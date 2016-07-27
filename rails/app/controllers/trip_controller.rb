class TripController < ApplicationController

	def index
        		headers['Access-Control-Allow-Origin'] = '*'
		@trips = Trip.all 
		render json: @trips, include: 'stops'
	end
end

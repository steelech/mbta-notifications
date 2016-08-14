class TripsController < ApplicationController
	  before_action :set_trip, only: [:show, :update, :destroy]
	def index
        	headers['Access-Control-Allow-Origin'] = '*'
                if(params[:direction])
                        @trips = Trip.where("direction_id = ? AND route_id = ?", params[:direction], params[:route_id])
                        puts @trips
                elsif(params[:trip_name])
                        puts params[:route_id]
                        puts params[:trip_name]
                        @trips = Trip.where("trip_name LIKE (?) AND route_id = ?", "%#{params[:trip_name]}%", params[:route_id])
                else
                        @trips = Trip.all
                end


		render json: @trips, include: 'stops'
	end

        def show
        	headers['Access-Control-Allow-Origin'] = '*'
        	render json: @trip, include: 'stops'
        end

        private
        	def set_trip
                	@trip = Trip.find(params[:id])
        	end

end

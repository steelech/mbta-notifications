class SubscriptionsController < ApplicationController
	def index
		headers['Access-Control-Allow-Origin'] = '*'
	end

	def create
		headers['Access-Control-Allow-Origin'] = '*'
		TwilioClient.new.send_message
		render json: {}
	end
end

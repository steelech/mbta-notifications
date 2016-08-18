require 'clockwork'
require './config/boot'
require './config/environment'

module Clockwork
	every(5.seconds, "doing work") do 
		puts "heyy"
	end
end
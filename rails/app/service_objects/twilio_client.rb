class TwilioClient
	def initialize

	end

	def send_message
		account_sid = 'AC9e6999a13ed56a85270f0a9d65e53ea9'
		auth_token = 'f8087e3a95a20ee0313c2fa6ed27f0af'

		@client = Twilio::REST::Client.new account_sid, auth_token
		puts @client
		@client.messages.create(
		  from: '+17745677236',
		  to: '17817333245',
		  body: 'suh dude'
		)
	end
end
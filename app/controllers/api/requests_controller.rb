module Api
	class RequestsController < ApplicationController
		def create
			@request = Request.new(request_params)
			@request.requestable_id = current_user.id
			@request.requestable_type = 'User'
			@request.status = 'Pending'

			if @request.save
				render :show, status: :created
			else
				render json: @request.errors.full_messages, status: :unprocessable_entity
			end
		end

		def index
			@requests = Request.all
			render :index
		end

		private
		
		def request_params
			params.require(:request).permit(:name, :description, :hours)
		end
	end
end
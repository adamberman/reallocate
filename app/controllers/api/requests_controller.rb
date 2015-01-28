module Api
	class RequestsController < ApplicationController
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
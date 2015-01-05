module Api
	class RequestsController < ApplicationController
		def create
			
		end

		def show

		end

		def index
			@requests = Request.all
			render :index
		end

		private
		
		def request_params
			params.require(:request).permit(:name, :description)
		end
	end
end
module Api
	class OrganizationsController < ApplicationController
		def create
			
		end

		def show

		end

		def index
			@organizations = Listing.all
			render :index
		end

		private
		
		def organization_params
			params.require(:organization).permit(:name, :form_date)
		end
	end
end
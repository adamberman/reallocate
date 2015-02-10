module Api
	class OffersController < ApplicationController
		def create
			@offer = Offer.new(offer_params)
			@offer.offerable_id = current_user.id
			@offer.offerable_type = 'User'
			@offer.status = 'Pending'

			if @offer.save
				render :show, status: :created
			else
				render json: @offer.errors.full_messages, status: :unprocessable_entity
			end
		end

		def index
			@offers = Offer.all
			render :index
		end

		private
		
		def offer_params
			params.require(:offer).permit(:name, :description, :hours)
		end
	end
end
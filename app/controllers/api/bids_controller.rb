module Api
	class BidsController < ApplicationController
		def create
			@bid = current_user.bids.new(bid_params)

			if @bid.save
				render :show, status: :created
			else
				render json: @bid.errors.full_messages, status: :unprocessable_entity
			end
		end

		private
		
		def bid_params
			params.require(:bid).permit(:content, :request_id, :writer)
		end
	end
end
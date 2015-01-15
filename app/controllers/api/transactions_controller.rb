module Api
	class TransactionsController < ApplicationController
		def create
			@transaction = current_user.responses.new(transaction_params)

			if @transaction.save
				render :show, status: :created
			else
				render json: @transaction.errors.full_messages, status: :unprocessable_entity
			end
		end

		def update
			@transaction = Transaction.find(params[:id])

			if @transaction.save
				render :show, status: :saved
			else
				render json: @transaction.errors.full_messages, status: :unprocessable_entity
			end
		end

		private
		
		def transaction_params
			params.require(:transaction).permit(:listable_id, :listable_type)
		end
	end
end
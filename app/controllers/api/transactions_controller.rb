module Api
	class TransactionsController < ApplicationController
		def create
			@transaction = current_user.responded_transactions.new(transaction_params)
			@transaction.last_edited_id = current_user.id

			if @transaction.save
				render :show, status: :created
			else
				render json: @transaction.errors.full_messages, status: :unprocessable_entity
			end
		end

		def update
			@transaction = Transaction.find(params[:id])
			@transaction.last_edited_id = current_user.id

			if @transaction.update_attributes(transaction_params)
				@transaction.pay if @transaction.should_pay?
				render :show
			else
				render json: @transaction.errors.full_messages, status: :unprocessable_entity
			end
		end

		private
		
		def transaction_params
			params.require(:transaction).permit(:listable_id, :listable_type, :hours, :status, :date)
		end
	end
end
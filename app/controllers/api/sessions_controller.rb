module Api
	class SessionsController < ApplicationController
		def create
			@user = User.find_by_credentials(
				session_params[:email],
				session_params[:password]
			)

			if @user
				log_in!(@user)
				render :show
			else
				render json: { message: "Invalid credentials" }, status: :unprocessable_entity
			end
		end

		def destroy
			log_out!
			render json: {}
		end

		private
		
		def session_params
			params.require(:user).permit(:email, :password)
		end
	end
end
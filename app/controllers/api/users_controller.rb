module Api
  class UsersController < ApplicationController
    def create
      @user = User.new(user_params)

      if @user.save
        log_in!(@user)
        render :show, status: :created
      else
        render json: @user.errors.full_messages, status: :unprocessable_entity
      end
    end

    def show
      @user = User.find(params[:id])
      render :show
    end

    private

    def user_params
      params.require(:user).permit(
        :first_name,
        :last_name, 
        :email,
        :password
      )
    end
  end
end
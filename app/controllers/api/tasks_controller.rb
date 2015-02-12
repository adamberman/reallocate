module Api
	class OffersController < ApplicationController
		def show
			@task = Task.find(params[:id])
      render :show
		end
	end
end
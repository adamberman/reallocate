module Api
	class TasksController < ApplicationController
		def show
			@task = Task.find(params[:id])
      render :show
		end

		def index
			@tasks = Task.all
			render :index
		end
	end
end
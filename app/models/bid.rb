class Bid < ActiveRecord::Base
	validates :user, :request, :content, :writer, presence: true
	validates :writer, inclusion: { in: ['User', 'Requester'], message: 'Writer must be either "User" or "Requester"' }

	belongs_to :user
	belongs_to :request
end

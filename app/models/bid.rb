class Bid < ActiveRecord::Base
	validates :user, :request, :content, presence: true

	belongs_to :user
	belongs_to :request
end

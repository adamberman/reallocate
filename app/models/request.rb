class Request < ActiveRecord::Base
	validates :name, :description, :requestable, presence: true

	has_many :bids, dependent: :destroy

	belongs_to :requestable, polymorphic: true

	def relevent_bids
		bids
	end
end

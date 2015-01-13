class Request < ActiveRecord::Base
	validates :name, :description, :requestable, presence: true

	has_many :transactions, as: :listable, dependent: :destroy

	belongs_to :requestable, polymorphic: true

	def relevent_bids(user)
		self.bids.where('user_id = ? OR writer = ?', user.id, 'Requester')
	end
end

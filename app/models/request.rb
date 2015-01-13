class Request < ActiveRecord::Base
	validates :name, :description, :requestable, presence: true

	has_many :transactions, as: :listable, dependent: :destroy

	belongs_to :requestable, polymorphic: true

	def relevent_transaction(user)
		self.transactons.where({ respondable: user })
	end
end

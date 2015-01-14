class Request < ActiveRecord::Base
	validates :name, :description, :requestable, presence: true

	has_many :transactions, as: :listable, dependent: :destroy

	belongs_to :requestable, polymorphic: true

	def relevant_transaction(user)
		self.transactions.where('respondable_id = ?', user.id).first
	end
end

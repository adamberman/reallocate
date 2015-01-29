class Request < ActiveRecord::Base
	validates :name, :description, :requestable, :hours, :status, presence: true
	validates :status, inclusion: { in: %w(Accepted Rejected Pending),
		message: "%{value} is not a valid status" }

	has_many :transactions, as: :listable, dependent: :destroy

	belongs_to :requestable, polymorphic: true

	def relevant_transaction(user)
		self.transactions.where('respondable_id = ?', user.id).first
	end
end

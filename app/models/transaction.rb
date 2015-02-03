class Transaction < ActiveRecord::Base
	validates :name, :description, :listable, :respondable, :hours, :status, :last_edited_id, presence: true
	validates :status, inclusion: { in: %w(Accepted Rejected Pending),
		message: "%{value} is not a valid status" }
	validates( 
		:respondable_id, 
		uniqueness: 
		{ 
			scope: 
			[:listable_id, :listable_type, :respondable_type], 
			message: 'You have already initialized a transaction on this item'
		}
	)

	belongs_to :listable, polymorphic: true
	belongs_to :respondable, polymorphic: true

	before_validation :set_name_and_description

	private

	def set_name_and_description
		self.name = listable.name
		self.description = listable.description
	end
end

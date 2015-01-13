class Transaction < ActiveRecord::Base
	validates :name, :description, :listable, :respondable, presence: true

	belongs_to :listable, polymorphic: true
	belongs_to :respondable, polymorphic: true

	before_save :set_name_and_description

	private

	def set_name_and_description
		self.name = listable.name
		self.description = listable.description
	end
end

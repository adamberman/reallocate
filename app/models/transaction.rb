class Transaction < ActiveRecord::Base
	validates :name, :description, :listable, :respondable, presence: true

	belongs_to :listable, polymorphic: true
	belongs_to :respondable, polymorphic: true
end

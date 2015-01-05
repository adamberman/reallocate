class Request < ActiveRecord::Base
	validates :name, :description, :requestable, presence: true

	belongs_to :requestable, polymorphic: true
end

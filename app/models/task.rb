class Task < ActiveRecord::Base
	validates :name, :description, :user, presence: true

	belongs_to :user
end

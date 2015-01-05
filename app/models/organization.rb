class Organization < ActiveRecord::Base
	validates :name, :balance, presence: true
	validates :name, uniqueness: true

	has_many :requests, as: :requestable, dependent: :destroy
end

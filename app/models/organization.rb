class Organization < ActiveRecord::Base
	validates :name, :balance, presence: true
	validates :name, uniqueness: true	
end

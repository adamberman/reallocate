class ListableTask < ActiveRecord::Base
	validates :task, :taskable, presence: true

	belongs_to :task
	belongs_to :taskable, polymorphic: true
end

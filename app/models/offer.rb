class Offer < ActiveRecord::Base
	validates :name, :description, :offerable, :hours, :status, :date, presence: true
	validates :status, inclusion: { in: %w(Accepted Rejected Pending Paid),
		message: "%{value} is not a valid status" }

	has_many :transactions, as: :listable, dependent: :destroy
	has_many :listable_tasks, as: :taskable
	has_many :tasks, through: :listable_tasks, source: :task

	belongs_to :offerable, polymorphic: true

	attr_reader :tags

	def relevant_transaction(user)
		self.transactions.where('respondable_id = ?', user.id).first
	end

	def tags=(tags)
		@tags = tags
		@tags.each do |i|
			self.listable_tasks.create!(task_id: i.to_i)
		end
	end
end

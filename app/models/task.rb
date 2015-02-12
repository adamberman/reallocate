class Task < ActiveRecord::Base
	validates :name, presence: true

	has_many :listable_tasks
	has_many :taskables, through: :listable_tasks, source: :taskable
	has_many :offers, through: :offer_tasks, source: :taskable
	has_many :requests, through: :request_tasks, source: :taskable
	has_many :transactions, through: :transaction_tasks, source: :taskable

	def offer_tasks
		listable_tasks.where('taskable_type = ?', 'Offer')
	end

	def request_tasks
		listable_tasks.where('taskable_type = ?', 'Request')
	end

	def transaction_tasks
		listable_tasks.where('taskable_type = ?', 'Transaction')
	end
end

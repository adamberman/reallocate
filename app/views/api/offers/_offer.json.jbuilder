json.extract!(
	offer,
	:id,
	:name,
	:description,
	:hours,
	:status,
	:date
)

if show_user
	json.offerable do
		if offer.offerable_type === 'User'
			offerable = json.partial! offer.offerable, partial: 'user', as: :user
		else
			offerable = json.partial! offer.offerable, partial: 'organization', as: :organization
		end
	end
	
	json.transaction do
		if offer.relevant_transaction(current_user)
			transaction = json.partial! offer.relevant_transaction(current_user), partial: 'transaction', as: :transaction, show_tasks: false
		end
	end
else
	json.transactions do
		json.array! offer.transactions, partial: 'api/transactions/transaction', as: :transaction, show_tasks: false
	end
end

if show_tasks
	json.tags offer.tasks, show_taskable: false
end
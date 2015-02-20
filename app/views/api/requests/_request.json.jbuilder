json.extract!(
	request,
	:id,
	:name,
	:description,
	:hours,
	:status,
	:date
)

if show_user
	json.requestable do
		if request.requestable_type === 'User'
			requestable = json.partial! request.requestable, partial: 'user', as: :user
		else
			requestable = json.partial! request.requestable, partial: 'organization', as: :organization
		end
	end

	json.transaction do
		if request.relevant_transaction(current_user)
			transaction = json.partial! request.relevant_transaction(current_user), partial: 'transaction', as: :transaction, show_tasks: false
		end
	end
else
	json.transactions do
		json.array! request.transactions, partial: 'api/transactions/transaction', as: :transaction, show_tasks: false
	end
end

if show_tasks
	json.tags request.tasks, show_taskable: false
end
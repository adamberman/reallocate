json.extract!(
	task,
	:id,
	:name
)

if show_taskable
	json.requests do
		json.array! task.requests, partial: 'api/requests/request', as: :request, show_tasks: false
	end

	json.offers do
		json.array! task.offers, partial: 'api/offers/offer', as: :offer, show_tasks: false
	end

	json.transactions do
		json.array! task.transactions, partial: 'api/transactions/transaction', as: :transaction, show_tasks: false
	end
end
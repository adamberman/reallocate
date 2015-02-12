json.extract!(
	task,
	:id,
	:name
)

json.requests do
	json.array! task.requests, partial: 'api/requests/request', as: :request
end

json.offers do
	json.array! task.offers, partial: 'api/offers/offer', as: :offer
end

json.transactions do
	json.array! task.transactions, partial: 'api/transactions/transaction', as: :transaction
end
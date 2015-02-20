json.extract!(
	user,
	:id,
	:first_name,
	:last_name,
	:email,
	:hours,
	:gravatar_url
)

name = user.first_name + " " + user.last_name
json.name name

json.requests do
	json.array! user.requests, partial: 'api/requests/request', as: :request, show_user: false, show_tasks: true
end

json.offers do
	json.array! user.offers, partial: 'api/offers/offer', as: :offer, show_user: false, show_tasks: false
end

json.respondedRequests do
	json.array! user.responded_requests, partial: 'api/transactions/transaction', as: :transaction, show_tasks: false
end

json.respondedOffers do
	json.array! user.responded_offers, partial: 'api/transactions/transaction', as: :transaction, show_tasks: false
end
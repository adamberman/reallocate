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
	json.array! user.requests, partial: 'api/requests/request', as: :request, show_user: false
end

json.offers do
	json.array! user.offers, partial: 'api/offers/offer', as: :offer, show_user: false
end
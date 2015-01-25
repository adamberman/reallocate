json.extract!(
	user,
	:id,
	:first_name,
	:last_name,
	:email,
	:gravatar_url
)

name = user.first_name + " " + user.last_name
json.name name

json.requests do
	json.array! user.requests, partial: 'api/requests/request', as: :request, show_user: false
end
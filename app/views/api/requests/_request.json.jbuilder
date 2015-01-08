json.extract!(
	request,
	:id,
	:name,
	:description
)

json.requestable do
	if request.requestable_type === 'User'
		requestable = json.partial! request.requestable, partial: 'user', as: :user
	else
		requestable = json.partial! request.requestable, partial: 'organization', as: :organization
	end
end

json.bids json.partial! request.bids.where({ user: current_user }), partial: 'bid', as: :bid

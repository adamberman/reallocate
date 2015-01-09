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

json.bids do
	json.array! request.relevent_bids(current_user) do |bid|
		json.partial! bid, partial: 'bid', as: :bid
	end
end

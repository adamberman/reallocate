json.extract!(
	bid,
	:id,
	:content
)

json.user do
	user = json.partial! bid.user, partial: 'user', as: :user	
end
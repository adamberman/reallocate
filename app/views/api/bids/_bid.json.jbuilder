json.extract!(
	bid,
	:id,
	:content,
	:writer,
	:created_at
)

json.user do
	user = json.partial! bid.user, partial: 'user', as: :user	
end
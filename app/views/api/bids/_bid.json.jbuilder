json.extract!(
	bid,
	:id,
	:content,
	:writer
)

json.user do
	user = json.partial! bid.user, partial: 'user', as: :user	
end
json.extract!(
	transaction,
	:id,
	:name,
	:description
)

json.respondable do
	if transaction.respondable_type === 'User'
		respondable = json.partial! transaction.respondable, partial: 'user', as: :user
	else
		respondable = json.partial! transaction.respondable, partial: 'organization', as: :organization
	end
end
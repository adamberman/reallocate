json.extract!(
	transaction,
	:id,
	:name,
	:description,
	:hours,
	:status,
	:last_edited_id,
	:listable_id,
	:date
)

json.tags request.tasks
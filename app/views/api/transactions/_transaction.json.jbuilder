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

if show_tasks
	json.tags transaction.tasks, show_taskable: false
end
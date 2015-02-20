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
	json.tags do
		json.array! transaction.tasks, partial: 'api/tasks/task', as: :task, show_taskable: false
	end
end
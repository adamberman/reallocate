class RenameListableColumnTaskable < ActiveRecord::Migration
  def change
  	rename_column :listable_tasks, :listable_id, :taskable_id
  	rename_column :listable_tasks, :listable_type, :taskable_type
  end
end

class CreateListableTasks < ActiveRecord::Migration
  def change
    create_table :listable_tasks do |t|
    	t.integer :task_id, null: false
    	t.integer :listable_id, null: false
    	t.integer :listable_type, null: false

      t.timestamps
    end

    add_index :listable_tasks, :task_id
    add_index :listable_tasks, :listable_id
  end
end

class ChangeTaskableTypeColumn < ActiveRecord::Migration
  def change
  	change_column :listable_tasks, :taskable_type, :string
  end
end

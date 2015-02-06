class AddHoursToUsers < ActiveRecord::Migration
  def change
  	add_column :users, :hours, :integer, null: false, default: 0
  end
end

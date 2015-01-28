class AddHoursToRequestAndTransaction < ActiveRecord::Migration
  def change
  	add_column :requests, :hours, :integer, null: false
  	add_column :transactions, :hours, :integer, null: false
  end
end

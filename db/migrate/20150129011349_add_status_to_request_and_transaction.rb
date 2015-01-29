class AddStatusToRequestAndTransaction < ActiveRecord::Migration
  def change
  	add_column :requests, :status, :string, null: false, default: "Pending"
  	add_column :transactions, :status, :string, null: false, default: "Pending"
  end
end

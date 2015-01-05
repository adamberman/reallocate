class CreateRequests < ActiveRecord::Migration
  def change
    create_table :requests do |t|
    	t.string :name, null: false
    	t.string :description, null: false
    	t.integer :requestable_id, null: false
    	t.string :requestable_type, null: false

      t.timestamps
    end

    add_index :requests, :requestable_id
  end
end

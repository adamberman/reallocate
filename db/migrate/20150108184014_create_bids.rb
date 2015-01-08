class CreateBids < ActiveRecord::Migration
  def change
    create_table :bids do |t|
    	t.integer :user_id, null: false
    	t.integer :request_id, null: false
    	t.text :content, null: false

      t.timestamps
    end

    add_index :bids, :user_id
    add_index :bids, :request_id
  end
end

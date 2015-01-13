class CreateTransactions < ActiveRecord::Migration
  def change
    create_table :transactions do |t|
    	t.string :name, null: false
    	t.string :description, null: false
    	t.integer :listable_id, null: false
    	t.string :listable_type, null: false
    	t.integer :respondable_id, null: false
    	t.string :respondable_type, null: false

      t.timestamps
    end
  end
end

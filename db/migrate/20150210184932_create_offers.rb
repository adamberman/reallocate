class CreateOffers < ActiveRecord::Migration
  def change
    create_table :offers do |t|
			t.string :name, null: false
    	t.string :description, null: false
    	t.integer :offerable_id, null: false
    	t.string :offerable_type, null: false
    	t.string :status, null: false, default: "Pending"
    	t.integer :hours, null: false

      t.timestamps
    end

    add_index :offers, :offerable_id
  end
end

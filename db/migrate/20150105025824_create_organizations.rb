class CreateOrganizations < ActiveRecord::Migration
  def change
    create_table :organizations do |t|
    	t.string :name, null: false
    	t.integer :balance, null: false, default: 0
    	t.date :form_date

      t.timestamps
    end

    add_index :organizations, :name
  end
end

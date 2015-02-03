class AddLastEditorIdToTransaction < ActiveRecord::Migration
  def change
  	add_column :transactions, :last_edited_id, :integer, null: false
  end
end

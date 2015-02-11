class AddDateToRequestsOffersTransactions < ActiveRecord::Migration
  def change
  	add_column :requests, :date, :string
  	add_column :offers, :date, :string
  	add_column :transactions, :date, :string
  end
end

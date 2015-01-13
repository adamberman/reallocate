class DropBidsTable < ActiveRecord::Migration
  def change
  	drop_table :bids
  end
end

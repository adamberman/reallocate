class CreateWriterColumnOnBid < ActiveRecord::Migration
  def change
    add_column :bids, :writer, :string
  end
end

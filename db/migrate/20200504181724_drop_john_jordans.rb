class DropJohnJordans < ActiveRecord::Migration[5.2]
  def change
    drop_table :john_jordans
  end
end

class DropJohnGillons < ActiveRecord::Migration[5.2]
  def change
    drop_table :john_gillons
  end
end

class CreateBriandas < ActiveRecord::Migration[5.2]
  def change
    create_table :briandas do |t|
      t.string :emailaddress, null: false
      t.string :age
      t.string :gender
      t.string :city
      t.string :state
      t.string :country

      t.timestamps
    end

    add_index :briandas, :emailaddress
  end
end

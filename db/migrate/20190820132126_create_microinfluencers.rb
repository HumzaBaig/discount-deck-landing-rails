class CreateMicroinfluencers < ActiveRecord::Migration[5.2]
  def change
    create_table :microinfluencers do |t|
      t.string :emailaddress, null: false

      t.timestamps
    end
    add_index :microinfluencers, :emailaddress
  end
end

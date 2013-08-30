class CreateAddresses < ActiveRecord::Migration
  def change
    create_table :addresses do |t|
      t.integer :latitude
      t.integer :longitude
      t.float :magnitude, default: 0

      t.timestamps
    end
  end
end

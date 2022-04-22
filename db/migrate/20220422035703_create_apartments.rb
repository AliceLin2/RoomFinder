class CreateApartments < ActiveRecord::Migration[6.1]
  def change
    create_table :apartments do |t|
      t.string :location
      t.integer :rent
      t.integer :num_of_bedrooms
      t.integer :num_of_bathrooms

      t.timestamps
    end
  end
end

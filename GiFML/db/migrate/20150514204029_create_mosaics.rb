class CreateMosaics < ActiveRecord::Migration
  def change
    create_table :mosaics do |t|
      t.string :title

      t.timestamps null: false
    end
  end
end

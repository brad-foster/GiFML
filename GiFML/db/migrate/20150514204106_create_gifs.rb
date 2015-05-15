class CreateGifs < ActiveRecord::Migration
  def change
    create_table :gifs do |t|
      t.text :url
      t.references :mosaic, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end

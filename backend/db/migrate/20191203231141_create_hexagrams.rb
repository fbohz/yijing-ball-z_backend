class CreateHexagrams < ActiveRecord::Migration[6.0]
  def change
    create_table :hexagrams do |t|
      t.belongs_to :reading, null: false, foreign_key: true
      t.integer :number
      t.string :lower_triagram
      t.string :upper_triagram
      t.string :name
      t.text :judgement
      t.text :image
      t.string :first_line
      t.string :second_line
      t.string :third_line
      t.string :fourth_line
      t.string :fifth_line
      t.string :sixth_line
      t.string :url
      t.timestamps
    end
  end
end

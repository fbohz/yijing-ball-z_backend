class CreateHexagrams < ActiveRecord::Migration[6.0]
  def change
    create_table :hexagrams do |t|
      # t.belongs_to :reading, null: false, foreign_key: true
      t.integer :number
      t.string :lower_triagram
      t.string :upper_triagram
      t.string :english_name
      t.string :chinese_name
      t.string :characters
      t.text :judgement
      t.text :image
      t.text :first_line
      t.text :second_line
      t.text :third_line
      t.text :fourth_line
      t.text :fifth_line
      t.text :sixth_line
      t.timestamps
    end
  end
end

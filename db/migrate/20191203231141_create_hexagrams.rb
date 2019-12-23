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
      t.text :line_1
      t.text :line_2
      t.text :line_3
      t.text :line_4
      t.text :line_5
      t.text :line_6
      t.timestamps
    end
  end
end

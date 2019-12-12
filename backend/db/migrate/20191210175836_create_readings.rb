class CreateReadings < ActiveRecord::Migration[6.0]
  def change
    create_table :readings do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.integer :hexnum
      t.integer :changenum
      t.text :notes
      t.string :lines
      t.string :changelines
      t.string :date
      t.timestamps
    end
  end
end

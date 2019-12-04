class CreateReadings < ActiveRecord::Migration[6.0]
  def change
    create_table :readings do |t|
      t.integer :hexnum
      t.integer :changinghex
      t.text :notes
      t.date :date
      t.timestamps
    end
  end
end

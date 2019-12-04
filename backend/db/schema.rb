# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_12_03_231141) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "hexagrams", force: :cascade do |t|
    t.bigint "reading_id", null: false
    t.integer "number"
    t.string "lower_triagram"
    t.string "upper_triagram"
    t.string "name"
    t.text "judgement"
    t.text "image"
    t.string "first_line"
    t.string "second_line"
    t.string "third_line"
    t.string "fourth_line"
    t.string "fifth_line"
    t.string "sixth_line"
    t.string "url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["reading_id"], name: "index_hexagrams_on_reading_id"
  end

  create_table "readings", force: :cascade do |t|
    t.integer "hexnum"
    t.integer "changinghex"
    t.text "notes"
    t.date "date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "hexagrams", "readings"
end

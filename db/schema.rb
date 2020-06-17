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

ActiveRecord::Schema.define(version: 2020_06_17_155801) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "hexagrams", force: :cascade do |t|
    t.integer "number"
    t.string "lower_triagram"
    t.string "upper_triagram"
    t.string "english_name"
    t.string "chinese_name"
    t.string "characters"
    t.text "judgement"
    t.text "image"
    t.text "line_1"
    t.text "line_2"
    t.text "line_3"
    t.text "line_4"
    t.text "line_5"
    t.text "line_6"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "readings", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.integer "hexnum"
    t.integer "changenum"
    t.text "notes"
    t.text "changelines"
    t.string "date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_readings_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "provider"
    t.string "uid"
    t.string "remember_token"
    t.string "client_mutation_id"
  end

  add_foreign_key "readings", "users"
end

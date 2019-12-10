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

ActiveRecord::Schema.define(version: 2019_12_10_180707) do

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
    t.text "first_line"
    t.text "second_line"
    t.text "third_line"
    t.text "fourth_line"
    t.text "fifth_line"
    t.text "sixth_line"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "readings", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.integer "hexnum"
    t.integer "changenum"
    t.text "notes"
    t.string "lines"
    t.string "changelines"
    t.string "hexname"
    t.string "changehexname"
    t.string "character"
    t.string "changechar"
    t.string "date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_readings_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "provider"
    t.string "uid"
    t.string "remember_token"
  end

  add_foreign_key "readings", "users"
end

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

ActiveRecord::Schema.define(version: 2019_07_11_101414) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "champions", force: :cascade do |t|
    t.string "name"
    t.string "passive"
    t.string "passive_description"
    t.string "q"
    t.string "q_description"
    t.string "w"
    t.string "w_description"
    t.string "e"
    t.string "e_description"
    t.string "r"
    t.string "r_description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "champions_roles", id: false, force: :cascade do |t|
    t.bigint "champion_id", null: false
    t.bigint "role_id", null: false
    t.index ["champion_id", "role_id"], name: "index_champions_roles_on_champion_id_and_role_id"
  end

  create_table "heroes", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "heroes_roles", id: false, force: :cascade do |t|
    t.bigint "hero_id", null: false
    t.bigint "role_id", null: false
    t.index ["hero_id", "role_id"], name: "index_heroes_roles_on_hero_id_and_role_id"
  end

  create_table "roles", force: :cascade do |t|
    t.string "name"
    t.string "game"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "similarities", force: :cascade do |t|
    t.integer "hero_id"
    t.integer "champion_id"
    t.boolean "role"
    t.boolean "skills"
    t.boolean "theme"
    t.string "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end

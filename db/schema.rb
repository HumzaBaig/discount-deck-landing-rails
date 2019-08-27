# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_08_26_183258) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "briandas", force: :cascade do |t|
    t.string "emailaddress", null: false
    t.string "age"
    t.string "gender"
    t.string "city"
    t.string "state"
    t.string "country"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["emailaddress"], name: "index_briandas_on_emailaddress"
  end

  create_table "microinfluencers", force: :cascade do |t|
    t.string "emailaddress", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["emailaddress"], name: "index_microinfluencers_on_emailaddress"
  end

end

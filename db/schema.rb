# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20150211185253) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "offers", force: true do |t|
    t.string   "name",                               null: false
    t.string   "description",                        null: false
    t.integer  "offerable_id",                       null: false
    t.string   "offerable_type",                     null: false
    t.string   "status",         default: "Pending", null: false
    t.integer  "hours",                              null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "date"
  end

  add_index "offers", ["offerable_id"], name: "index_offers_on_offerable_id", using: :btree

  create_table "organizations", force: true do |t|
    t.string   "name",                   null: false
    t.integer  "balance",    default: 0, null: false
    t.date     "form_date"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "organizations", ["name"], name: "index_organizations_on_name", using: :btree

  create_table "requests", force: true do |t|
    t.string   "name",                                 null: false
    t.string   "description",                          null: false
    t.integer  "requestable_id",                       null: false
    t.string   "requestable_type",                     null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "hours",                                null: false
    t.string   "status",           default: "Pending", null: false
    t.string   "date"
  end

  add_index "requests", ["requestable_id"], name: "index_requests_on_requestable_id", using: :btree

  create_table "transactions", force: true do |t|
    t.string   "name",                                 null: false
    t.string   "description",                          null: false
    t.integer  "listable_id",                          null: false
    t.string   "listable_type",                        null: false
    t.integer  "respondable_id",                       null: false
    t.string   "respondable_type",                     null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "hours",                                null: false
    t.string   "status",           default: "Pending", null: false
    t.integer  "last_edited_id",                       null: false
    t.string   "date"
  end

  create_table "users", force: true do |t|
    t.string   "first_name",                  null: false
    t.string   "last_name",                   null: false
    t.string   "email",                       null: false
    t.string   "password_digest",             null: false
    t.string   "session_token",               null: false
    t.string   "gravatar_url"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "hours",           default: 0, null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree

end

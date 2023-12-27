/**
 * Title: Todo Model and Schema
 * Description: This is Todo model and Schema for Database.
 * Author: Masud Parvez
 * Date: 2023-12-11
 */

const mongoose = require("mongoose");
const ProfileModel = require("./ProfileModel");

const DataSchema = new mongoose.Schema(
  {
    UserName: String,
    TodoSubject: String,
    TodoDesc: String,
    TodoCreateDate: Date,
    TodoUpdateDate: Date,
    TodoStatus: String,
    User: {
      type: mongoose.Types.ObjectId,
      ref: "profile",
    },
  },
  { versionKey: false }
);

const TodoModel = mongoose.model("Todo", DataSchema);

module.exports = TodoModel;

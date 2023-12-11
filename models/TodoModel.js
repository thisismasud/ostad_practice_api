/**
 * Title: Todo Model and Schema
 * Description: This is Todo model and Schema for Database.
 * Author: Masud Parvez
 * Date: 2023-12-11
 */

const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    UserName: { type: String },
    TodoSubject: { type: String },
    TodoDesc: { type: String },
    TodoCreateDate: { type: Date },
    TodoUpdateDate: { type: Date },
    TodoStatus: { type: String },
  },
  { versionKey: false }
);

const TodoModel = new mongoose.model("Todo", DataSchema);

module.exports = TodoModel;

/**
 * Title: Sign Up Model and Schema
 * Description: This is sign up model and Schema for Database.
 * Author: Masud Parvez
 * Date: 2023-12-04
 */

const mongoose = require("mongoose");
const TodoModel = require("./TodoModel");

const DataSchema = mongoose.Schema(
  {
    FirstName: {
      type: String,
      required: true,
    },
    LastName: {
      type: String,
      required: true,
    },
    EmailAddress: {
      type: String,
      required: true,
    },
    MobileNumber: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          if (value.length !== 11) {
            return false;
          } else {
            return true;
          }
        },
      },
    },
    City: { type: String },
    UserName: { type: String, unique: true }, //username will be unique
    Password: { type: String },
    Todos: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Todo",
      },
    ],
  },
  { versionKey: false }
);

const ProfileModel = mongoose.model("profile", DataSchema);

module.exports = ProfileModel;

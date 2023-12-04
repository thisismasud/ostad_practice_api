/**
 * Title: Profile Information controller
 * Description: This is a Profile controller it basically handle profile related actions (CRUD OPERATIONS).
 * Author: Masud Parvez
 * Date: 2023-12-04
 */
//dependencies
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const SignupModel = require("../models/SignupModel");

//module scaffolding
controller = {};

//creates a new profile
controller.signup = async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.Password, 10);
  const newProfile = new SignupModel({
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    EmailAddress: req.body.EmailAddress,
    MobileNumber: req.body.MobileNumber,
    City: req.body.City,
    UserName: req.body.UserName,
    Password: hashedPassword,
  });
  try {
    await SignupModel.create(newProfile);
    res.status(200).json({
      msg: "User created successfully",
    });
  } catch {
    res.status(500).json({ msg: "Could Not save data" });
  }
};

module.exports = controller;

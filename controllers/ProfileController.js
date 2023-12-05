/**
 * Title: Profile Information controller (Creates a  New user/profile)
 * Description: This is a Profile controller it basically handle profile related actions).
 * Author: Masud Parvez
 * Date: 2023-12-04
 */
//dependencies
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const ProfileModel = require("../models/ProfileModel");

//module scaffolding
controller = {};

//creates a new profile
controller.signup = async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.Password, 10);
  const newProfile = new ProfileModel({
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    EmailAddress: req.body.EmailAddress,
    MobileNumber: req.body.MobileNumber,
    City: req.body.City,
    UserName: req.body.UserName,
    Password: hashedPassword,
  });
  try {
    await ProfileModel.create(newProfile);
    res.status(200).json({
      msg: "Profile created successfully",
    });
  } catch {
    res.status(500).json({ msg: "Could Not create new profile" });
  }
};

module.exports = controller;

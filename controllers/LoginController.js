/**
 * Title: Login  controller (login User/Profile)
 * Description: This is a Profile controller it basically handle profile related actions (CRUD OPERATIONS).
 * Author: Masud Parvez
 * Date: 2023-12-04
 */
//dependencies
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const ProfileModel = require("../models/ProfileModel");

//module scaffolding
const controller = {};

//profile/user login
controller.login = async (req, res) => {
  try {
    const user = await ProfileModel.find({ UserName: req.body.UserName });
    if (user && user.length > 0) {
      //validating password
      const isValidPassword = await bcrypt.compare(
        req.body.Password,
        user[0].Password
      );

      if (isValidPassword) {
        //generate token
        const token = await jwt.sign(
          {
            UserId: user[0]._id,
            UserName: user[0].UserName,
          },
          process.env.JWT_SECRET,
          { expiresIn: "1d" }
        );
        res.status(200).json({
          access_token: token,
          message: "Login Successfull",
        });
      } else {
        res.status(401).json({
          msg: "Password Authentication failed",
        });
      }
    } else {
      res.status(401).json({
        msg: "User not found",
      });
    }
  } catch (err) {
    res.status(404).json({ msg: err.message });
  }
};

//module exports
module.exports = controller;

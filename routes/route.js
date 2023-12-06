/**
 * Title: A Restful API for TODO application
 * Description: This is the router file. Handling all the routes and actions.
 * Author: Masud Parvez
 * Date: 2023-12-04
 */

//dependencies
const express = require("express");
const router = express.Router();
const checkLogin = require("../middlewares/AuthVerifyMiddleware");
const ProfileController = require("../controllers/ProfileController");
const LoginController = require("../controllers/LoginController");

//routes
router.post("/signup", ProfileController.signup);
router.post("/login", LoginController.login);

//view profile route
router.get("/viewprofiledata", checkLogin, ProfileController.viewprofiledata);

//update profile route
router.post(
  "/updateprofiledata",
  checkLogin,
  ProfileController.updateprofiledata
);

//module exports
module.exports = router;

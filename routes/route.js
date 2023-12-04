/**
 * Title: A Restful API for TODO application
 * Description: This is the router file. Handling all the routes and actions.
 * Author: Masud Parvez
 * Date: 2023-12-04
 */

//dependencies
const express = require("express");
const router = express.Router();
const ProfileController = require("../controllers/ProfileController");

router.post("/signup", ProfileController.signup);

//module exports
module.exports = router;

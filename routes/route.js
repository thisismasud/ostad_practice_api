/**
 * Title: A Restful API for TODO application
 * Description: This is the router file. Handling all the routes and actions.
 * Author: Masud Parvez
 * Date: 2023-12-04
 */

//dependencies
const express = require("express");
const router = express.Router();

router.get("/hello", (req, res) => {
  res.json("Hello How are you");
});
//module exports
module.exports = router;

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
const TodoListController = require("../controllers/TodoListController");

//* ROUTES FOR USER/PROFILE ===================================================================== */

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

//* ROUTES FOR TODO ===================================================================== */
router.post("/createtodo", checkLogin, TodoListController.createTodo);
router.get("/viewtodo", checkLogin, TodoListController.viewTodo);
router.post("/updatetodo", checkLogin, TodoListController.updateTodo);
router.post(
  "/updatetodostatus",
  checkLogin,
  TodoListController.updateTodoStatus
);
router.delete("/deletetodo", checkLogin, TodoListController.deleteTodo);

//module exports
module.exports = router;

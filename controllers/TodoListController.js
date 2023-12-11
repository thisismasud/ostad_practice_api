/**
 * Title: Todo  controller
 * Description: This is a Todo controller it basically handle todo related actions).
 * Author: Masud Parvez
 * Date: 2023-12-11
 */
//dependencies
const mongoose = require("mongoose");
const TodoModel = require("../models/TodoModel");

//module scaffolding
controller = {};

//creates a new todo
controller.createtodo = async (req, res) => {
  const todo = {
    UserName: req.UserName,
    TodoSubject: req.body.TodoSubject,
    TodoDesc: req.body.TodoDesc,
    TodoCreateDate: Date.now(),
    TodoUpdateDate: Date.now(),
    TodoStatus: "New",
  };
  try {
    await TodoModel.create(todo);
    res.status(200).json("Todo Created Successfully");
  } catch (err) {
    res.status(500).json({ msg: "Error creating Todo", err: err.message });
  }
};

//exports module
module.exports = controller;

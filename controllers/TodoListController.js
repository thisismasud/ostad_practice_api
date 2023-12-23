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
controller.createTodo = async (req, res) => {
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

//viewtodo
controller.viewTodo = async (req, res) => {
  const username = req.UserName;
  try {
    const todoData = await TodoModel.find({ UserName: username });
    res.status(200).json({ Data: todoData });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

//update todo
controller.updateTodo = async (req, res) => {
  const id = req.body.id;
  const updateTodoData = {
    TodoSubject: req.body.TodoSubject,
    TodoDesc: req.body.TodoDesc,
    TodoUpdateDate: Date.now(),
  };
  try {
    const data = await TodoModel.findOneAndUpdate({ _id: id }, updateTodoData, {
      new: true,
    });
    if (data === null) {
      res.status(404).json("Request todo does not exist");
      return false;
    }
    res.status(200).json({ msg: "Data updated successfully", data: data });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

//Update Todo Status
controller.updateTodoStatus = async (req, res) => {
  const id = req.body.id;
  const todoStatus = {
    TodoStatus: req.body.TodoStatus,
  };
  try {
    await TodoModel.findOneAndUpdate({ _id: id }, todoStatus);
    res.status(200).json({ msg: "Status updated successfully" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

//Delete the requested todo
controller.deleteTodo = async (req, res) => {
  const id = req.body.id;
  try {
    await TodoModel.findByIdAndDelete(id);
    res.status(200).json({ msg: "Todo Deleted successfully" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
//exports module
module.exports = controller;

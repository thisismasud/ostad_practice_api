/**
 * Title: A Restful API for TODO application
 * Description: This is the main file that is connecting to database and managing all the middlewares.
 * Author: Masud Parvez
 * Date: 2023-12-04
 */

//Basic Libraries
const bodyParser = require("body-parser");
require("dotenv").config();
const express = require("express");
const app = express();

//security middleware libraries
const helmet = require("helmet");
const morgan = require("morgan");
const { rateLimit } = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const cors = require("cors");

//Database libraries
const mongoose = require("mongoose");

//application dependencies
const router = require("./routes/route");

//implemantation of middlewares
app.use(cors());
app.use(express.json()); // Parse JSON bodies
app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies (e.g., form data)
app.use(mongoSanitize()); // By default, in mongosanitize$ and . characters are removed completely from user-supplied input in the following places: req.body, req.params, req.headers, req.query

//User Request rate limit
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
});
app.use(limiter);

//mongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/Todo", { autoIndex: true }) //autoIndex is optional, but I used it for get unique indexes exp: username
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err.message));

//Routing implementation
app.use("/api/v1", router);

//undefined routes implementation
app.use("*", (req, res) => {
  res.status(404).json("File not found");
});

//port
const port = process.env.PORT || 3000;

//starting server
app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});

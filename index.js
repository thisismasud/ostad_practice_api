//third party dependencies
const mongoose = require("mongoose");
const helmet = require("helmet");
require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.json());

//port
const port = process.env.PORT || 3000;

//starting server
app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});

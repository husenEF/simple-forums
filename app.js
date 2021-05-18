const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./src/routes/index");
const usersRouter = require("./src/routes/users");
const router = express.Router();

const app = express();

const v1 = require("./src/routes/v1");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// app.use("/api/",)
router.use("/", indexRouter);
router.use("/users", usersRouter);
app.use("/api/v1", v1);

module.exports = app;

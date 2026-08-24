const express = require("express");
const { StatusCodes } = require("http-status-codes");
const cors = require("cors");
const pool = require("./database.js");
const featuresRouter = require("./features/features.router.js");
const signupRouter = require("./signup/signup.router.js");
const {loginRouter} = require("./login/login.router.js");
const {forgotPasswordRouter} = require("./forgotPassword/forgotPassword.router.js");
const storiesRouter = require("./stories/stories.router.js");
const usersRouter = require("./users/users.router.js");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/signup", signupRouter);

app.use("/login",loginRouter);

app.use("/forgot-password",forgotPasswordRouter);

app.use("/features", featuresRouter);

app.use("/stories",storiesRouter);

app.use("/users",usersRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

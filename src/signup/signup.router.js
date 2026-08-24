const express = require("express");
const signupController = require("./signup.controller");
const {signupValidator} = require("./validators/signup.validator.js");
const { validationResult } = require("express-validator");
const { StatusCodes } = require("http-status-codes");

const signupRouter = express.Router();

signupRouter.post("/signup",signupValidator,(req,res)=>{
    const result = validationResult(req);
    
    if (result.isEmpty()) {
        return signupController.handleSignup(req, res);
      } else {
        res.status(StatusCodes.BAD_REQUEST).json(result.array());
      }
});


module.exports = signupRouter;
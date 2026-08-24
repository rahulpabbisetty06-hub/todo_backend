const express = require("express");
const {validationResult} = require("express-validator");
const {StatusCodes} = require("http-status-codes");
const loginController = require("./login.controller.js");
const {loginValidator} = require("./validators/login.validator.js");

const loginRouter = express.Router();

loginRouter.post("/login",loginValidator,(req,res) => {
    const result = validationResult(req);

    if(result.isEmpty()){
         return loginController.handleLogin(req,res);
    }
    else{
        res.status(StatusCodes.BAD_REQUEST).json(result.array());
    }
    
});

module.exports = { loginRouter };
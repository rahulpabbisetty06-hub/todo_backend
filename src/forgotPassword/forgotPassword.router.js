const express = require("express");
const { validationResult } = require("express-validator");

const {updatePasswordValidation} = require("./validators/updatePassword.validator.js");
const forgotPasswordController = require("./forgotPassword.controller.js");
const { StatusCodes } = require("http-status-codes");

const forgotPasswordRouter = express.Router();

forgotPasswordRouter.post("/get-security-question",forgotPasswordController.getSecurityQuestion);

forgotPasswordRouter.post("/update-password",updatePasswordValidation,(req,res)=>{
    const result = validationResult(req);

    if(result.isEmpty()){
        return forgotPasswordController.updatePassword(req,res);
    }else{
        res.status(StatusCodes.BAD_REQUEST).json(result.array());
    }
});


module.exports = {forgotPasswordRouter};
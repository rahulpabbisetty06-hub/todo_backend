const express = require("express");
const {StatusCodes} = require("http-status-codes");
const {validationResult} = require("express-validator");

const authMiddleware = require("../middlewares/authenticateToken.middleware.js");
const usersController = require("./users.controller.js");
const {userStoriesValidation} = require("./validators/users.validators.js");

const userRouter = express.Router();

userRouter.get("/:userId/stories",authMiddleware,userStoriesValidation,(req,res,next) => {
    const result = validationResult(req);

    if(!result.isEmpty()){
        return res.status(StatusCodes.BAD_REQUEST).json({
            error: result.array()
        });
    };

    return usersController.handleGetUserStories(req,res,next);

});

module.exports = userRouter;

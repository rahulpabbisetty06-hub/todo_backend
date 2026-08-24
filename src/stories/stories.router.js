const express = require("express");
const {validationResult} = require("express-validator");

const authMiddleware = require("../middlewares/authenticateToken.middleware");
const storiesController = require("./stories.controller.js");
const {storiesValidator} = require("./validators/stories.validator.js");
const {updateStoryValidation} = require("./validators/updateStories.validator.js");
const { StatusCodes } = require("http-status-codes");

const storiesRouter = express.Router();

storiesRouter.get("/:id",authMiddleware,storiesController.handleGetStoryById);

storiesRouter.post("/create-story",authMiddleware,storiesValidator,(req,res,next) => {
    const result = validationResult(req);

    if(!result.isEmpty()){
        return res.status(StatusCodes.BAD_REQUEST).json(result.array());
    }

    return storiesController.handleCreateStory(req,res,next);
});

storiesRouter.put("/:id",authMiddleware,updateStoryValidation,
    (req,res,next) => {
        const result = validationResult(req);

        if(!result.isEmpty()){
            return res
                .status(StatusCodes.BAD_REQUEST)
                .json(result.array());
        }
        return storiesController.handleUpdateStory(req,res,next);
    }
)

module.exports = storiesRouter;
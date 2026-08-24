const express = require("express");
const { validationResult } = require("express-validator");
const { StatusCodes } = require("http-status-codes");

const featuresController = require("./features.controller.js");
const authMiddleware = require("../middlewares/authenticateToken.middleware.js");
const { featuresValidation } = require("./validators/features.validators.js");
const {updateFeatureValidation} = require("./validators/features.updateValidators.js");

const featuresRouter = express.Router();

featuresRouter.get(
    "/allFeatures",
    authMiddleware,
    featuresController.handleGetAllFeatures
);

featuresRouter.get(
    "/:id",
    authMiddleware,
    featuresController.handleGetFeaturesById
);

featuresRouter.post(
    "/newFeatures",
    authMiddleware,
    featuresValidation,
    (req, res, next) => {

        const result = validationResult(req);

        if (!result.isEmpty()) {
            return res.status(StatusCodes.BAD_REQUEST).json(result.array());
        }

        return featuresController.handleNewFeatures(req, res, next);
    }
);

featuresRouter.put(
    "/:id",
    authMiddleware,
    updateFeatureValidation,
    (req, res, next) => {

        const result = validationResult(req);

        if (!result.isEmpty()) {
            return res.status(StatusCodes.BAD_REQUEST).json(result.array());
        }

        return featuresController.handleUpdateFeatures(req, res, next);
    }
);

module.exports = featuresRouter;
const { param } = require("express-validator");

const userStoriesValidation = [
    param("userId")
        .notEmpty()
        .withMessage("User ID is required.")
        .isUUID()
        .withMessage("Invalid User Id.")
];

module.exports = {
    userStoriesValidation
};
const { body } = require("express-validator");

const updateFeatureValidation = [
    body("title")
        .optional()
        .isLength({ min: 3, max: 100 })
        .withMessage("Title should be between 3 and 100 characters."),

    body("description")
        .optional()
        .isLength({ min: 1 })
        .withMessage("Description cannot be empty."),

    body("priority")
        .optional()
        .isIn(["Low", "Medium", "High", "Critical"])
        .toLowerCase()
        .trim()
        .withMessage("Invalid Priority")
];

module.exports = { updateFeatureValidation };
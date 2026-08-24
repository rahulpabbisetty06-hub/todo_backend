const { body } = require("express-validator");

const updateStoryValidation = [

    body("title")
        .optional()
        .isLength({ min: 3, max: 200 })
        .withMessage("Title must be between 3 and 200 characters.")
        .trim(),

    body("description")
        .optional()
        .isString()
        .withMessage("Description must be a string."),

    body("priority")
        .optional()
        .isIn(["Low", "Medium", "High", "Critical"])
        .withMessage(
            "Priority must be Low, Medium, High or Critical."
        ),

    body("acceptanceCriteria")
        .optional()
        .isArray({ min: 1 })
        .withMessage(
            "Acceptance criteria must contain at least one item."
        ),

    body("acceptanceCriteria.*")
        .optional()
        .isString()
        .notEmpty()
        .withMessage(
            "Each acceptance criteria item must be a non-empty string."
        )

];

module.exports = { updateStoryValidation };
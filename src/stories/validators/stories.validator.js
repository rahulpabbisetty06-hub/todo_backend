const { body } = require("express-validator");

const storiesValidator = [
      body("featureId")
          .notEmpty()
          .withMessage("Feature ID is required.")
          .isUUID()
          .withMessage("Invalid Feature ID."),
      body("title")
          .notEmpty()
          .withMessage("title is required.")
          .isLength({ min: 3, max: 200 })
          .withMessage("Title must be between 3 and 200 characters."),
      body("description")
          .optional()
          .isString()
          .withMessage("Description must be a string."),
      body("priority")
        .notEmpty()
        .withMessage("Priority is required.")
        .isIn(["Low", "Medium", "High", "Critical"])
        .withMessage("Priority must be Low, Medium, High or Critical."),
      body("acceptanceCriteria")
        .isArray({ min: 1 })
        .withMessage("Acceptance criteria must contain at least one item."),

    body("acceptanceCriteria.*")
        .isString()
        .notEmpty()
        .withMessage("Each acceptance criteria item must be a non-empty string.")
]

module.exports = {storiesValidator};
const { body } = require("express-validator");

const signupValidator = [
    body("username")
      .notEmpty()
      .withMessage("username is required.")
      .isLength({min:3,max:20})
      .withMessage("username should between 3 and 20 characters.")
      .trim(),
    body("password")
       .notEmpty()
       .withMessage("password is required.")
       .isLength({min:6})
       .withMessage("password should minimum 6 characters.")
       .isString(),
    body("securityQuestion")
        .notEmpty()
        .withMessage("security question is required.")
        .isIn([
            "pet",
            "school",
            "city",
            "teacher",
            "food",
            "movie",
            "car"
        ])
        .withMessage("Invalid security question"),
    body("securityAnswer")
        .notEmpty()
        .withMessage("security answer is required.")
        .trim()
        .toLowerCase()
];

module.exports = { signupValidator };
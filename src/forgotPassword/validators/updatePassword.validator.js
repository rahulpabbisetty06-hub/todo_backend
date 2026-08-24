const { body } = require("express-validator");

const updatePasswordValidation = [
    body("username")
      .notEmpty()
      .withMessage("username is required.")
      .isLength({min:3,max:20})
      .withMessage("username should between 3 and 20 characters.")
      .trim(),
    body("newPassword")
       .notEmpty()
       .withMessage("password is required.")
       .isLength({min:6})
       .withMessage("password should minimum 6 characters.")
       .isString(),
    body("securityAnswer")
        .notEmpty()
        .withMessage("security answer is required.")
        .trim()
        .toLowerCase()
];

module.exports = { updatePasswordValidation };

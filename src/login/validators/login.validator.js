const { body } = require("express-validator");

const loginValidator = [
    body("username")
       .notEmpty()
       .withMessage("username is required")
       .isLength({min:3,max:20})
       .withMessage("username should between 3 and 20 characters.")
       .trim(),
    body("password")
       .notEmpty()
       .withMessage("password is reqired")
       .isLength({min:6})
       .withMessage("password should minimum 6 characters.")
       .isString(),
]

module.exports = { loginValidator };
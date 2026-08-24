const {body} = require("express-validator");

const featuresValidation = [
    body("title")
       .notEmpty()
       .withMessage("title is required.")
       .isLength({min: 3,max: 100})
       .withMessage("tile in between 3 and 100 characters."),
    body("description")
       .notEmpty()
       .withMessage("description is required"),
    body("priority")
       .notEmpty()
       .withMessage("priority is required")
       .toLowerCase()
       .trim()
       .isIn(["high","medium","low"])
       .withMessage("Invalid Priority")

];

module.exports = {featuresValidation};
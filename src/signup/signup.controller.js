const signupService = require("./signup.service");
const { StatusCodes } = require("http-status-codes");

const handleSignup = async (req, res) => {
  try {
    const result = await signupService.signup(req.body);
    return res.status(StatusCodes.CREATED).json(result);
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: error.message,
    });
  }
};

module.exports = {
  handleSignup,
};

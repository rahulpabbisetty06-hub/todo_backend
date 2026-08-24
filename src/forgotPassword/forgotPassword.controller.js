//const { forgotPasswordRouter } = require("./forgotPassword.router")
const forgotPasswordService = require("./service/forgotPassword.service.js");
const updatePasswordService = require("./service/updatePassword.service.js");
const {StatusCodes} = require("http-status-codes");

const getSecurityQuestion = async (req,res,next) => {
    try{
      //console.log(req.body);
      const result = await forgotPasswordService.getSecurityQuestion(req.body);

      return res.status(StatusCodes.OK).json(result);
    }catch(error){
       next(error);
    }
}

const updatePassword = async (req,res) => {
  try{
       const result = await updatePasswordService.resetPassword(req.body);
       return res.status(StatusCodes.OK).json(result);
  }
  catch (error){
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: error.message,
      });
  };
   
};


module.exports = { getSecurityQuestion,updatePassword };
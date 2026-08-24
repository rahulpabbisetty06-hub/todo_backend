const {StatusCodes} = require("http-status-codes");

const userService = require("./service/getUserStories.service.js");

const handleGetUserStories = async (req,res,next) => {
    try{
       const userId = req.params.userId;
       
        const result = await userService.getUserStories(userId);

        return res.status(StatusCodes.OK).json({
            message:"User Stories Retrived Successfully.",
            data:result
        });
    }
    catch(error){
        next(error);
    }  
};

module.exports = {handleGetUserStories};
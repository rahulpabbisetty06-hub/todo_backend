const {StatusCodes} = require("http-status-codes");

const getStoryByIdService = require("./service/getStoryById.service.js");
const postStoryService = require("./service/postStory.service.js");
const updateStoryService = require("./service/updateStory.service.js");

const handleGetStoryById = async (req,res,next) => {
    try{
       const id = req.params.id;

       console.log(id);

       const result = await getStoryByIdService.getStoryById(id);

       return res.status(StatusCodes.OK).json({
        message:"Story retrived successfully!",
        data: result
       });
    }  
    catch(error){
        next(error);
    }
};

const handleCreateStory = async (req,res,next) => {
    try{
        const result = await postStoryService.postStory(req.body);

        return res.status(StatusCodes.CREATED).json(result);
    }
    catch(error){
        next(error);
    }
};

const handleUpdateStory = async (req,res,next) => {
    try{
        const id = req.params.id;
        
        const result = await updateStoryService.updateStory(id,req.body);

        return res.status(StatusCodes.OK).json(result);

    }
    catch(error){
        next(error);
    }
}

module.exports = { handleGetStoryById, handleCreateStory, handleUpdateStory };
const { StatusCodes } = require("http-status-codes");
const allFeaturesProvider = require("./providers/allFeatures.provider");
const getFeatureByIdProvider = require("./providers/getFeaturesById.provider");
const createFeatureService = require("./service/createFeatures.service.js");
const updateFeatureService = require("./service/updateFeature.service.js");

async function handleGetAllFeatures(req, res, next) {
    try{
        const features = await allFeaturesProvider.getAllfeatures();

        return res.status(StatusCodes.OK).json({
          message:"features retrived successfully.",
          data:features
        });
    }
    catch(error){
        next(error);
    }
}

async function handleGetFeaturesById(req,res,next){
    try{
       const id = req.params.id;

       console.log(id);
       const feature = await getFeatureByIdProvider.getFeaturesById(id);

       return res.status(StatusCodes.OK).json({
         message:"feature retrived successfully.",
         data:feature
       });
    }
    catch(error){
       next(error);
    }
}

async function handleNewFeatures(req,res,next){
    try{
        const result = await createFeatureService.createFeature(req.body);

        return res.status(StatusCodes.CREATED).json(result);
    }catch(error){
      next(error);
    }
}

async function handleUpdateFeatures(req,res,next){
  const id = req.params.id;
    try{
      const result = await updateFeatureService.updateFeature(req.params.id,req.body);
      
      return res.status(StatusCodes.OK).json(result);

    }
    catch(error){
       next(error);
    }
}

module.exports = {
  handleGetAllFeatures,handleGetFeaturesById,handleNewFeatures,handleUpdateFeatures
};

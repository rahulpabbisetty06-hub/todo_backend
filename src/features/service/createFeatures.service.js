const { v4: uuidv4 } = require("uuid");

const createFeatureProvider = require("../providers/createFeatures.provider.js");

const createFeature = async (data) => {
   const feature = {
      id: uuidv4(),
      title: data.title,
      description: data.description,
      priority: data.priority 
   }

   await createFeatureProvider.postFeature(feature);

   return {
     message: "Feature created successfully.",
     featureId: feature.id,
   };
};

module.exports = {createFeature};
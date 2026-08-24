const {StatusCodes} = require("http-status-codes");
const updateFeatureProvider = require("../providers/updateFeature.provider.js");

const updateFeature = async (id,data) => {
    const feature = await updateFeatureProvider.checkFeature(id);
    
    if(!feature){
        const error = new Error("Feature not found");
        error.statusCode = 404;
        throw error;
    }

    const updatedFeature = {
        title: data.title ?? feature.title,
        description: data.description ?? feature.description,
        priority: data.priority ?? feature.priority,
    };

    await updateFeatureProvider.putFeature(id,updatedFeature);

    const updateFeature =
        await updateFeatureProvider.checkFeature(id);

    return {
        message: "Feature updated successfully",
        data: updateFeature,
    };
}

module.exports = {updateFeature};
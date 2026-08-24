const {v4: uuidv4} = require("uuid");

const checkFeatureProvider = require("../providers/checkFeature.provider.js");
const createStoryProvider = require("../providers/createStory.provider.js");

const postStory = async (data) => {
     const feature = await checkFeatureProvider.checkFeature(data.featureId);

     if(!feature){
        const error = new Error("Feature not found.");
        error.statusCode = 404;
        throw error;
     }

     const storyId = uuidv4();
     
     const storyCode = await createStoryProvider.getNextStoryCode();

     const story = {
        id: storyId,
        storyCode: storyCode,
        featureId: data.featureId,
        title: data.title,
        description: data.description,
        priority: data.priority,
        acceptanceCriteria: data.acceptanceCriteria,
        status: "Todo",
        orderIndex: 0
     };

     await createStoryProvider.createStory(story);

     return {
        message: "Story created successfully!",
        data: {
            id: story.id,
            storyCode: story.storyCode,
            featureId: story.featureId,
            title: story.title,
            description: story.description,
            priority: story.priority,
            status: story.status,
            acceptanceCriteria: story.acceptanceCriteria
        }
     }
};

module.exports = {postStory};
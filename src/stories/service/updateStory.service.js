const updateStoryProvider = require("../providers/putStory.provider.js");


const updateStory = async (id, data) => {

    const story = await updateStoryProvider.getStoryById(id);

    if (!story) {

        const error = new Error("Story not found.");
        error.statusCode = 404;
        throw error;
    }

    const updatedStory = {

        title: data.title ?? story.title,

        description:
            data.description ?? story.description,

        priority:
            data.priority ?? story.priority,

        acceptanceCriteria:
            data.acceptanceCriteria ??
            story.acceptance_criteria
    };

    await updateStoryProvider.updateStory(id,updatedStory);

    const result = await updateStoryProvider.getStoryById(id);

    return {

        message: "Story updated successfully!",

        data: {
            id: result.id,
            storyCode: result.story_code,
            featureId: result.feature_id,
            title: result.title,
            description: result.description,
            priority: result.priority,
            status: result.status,
            acceptanceCriteria: result.acceptance_criteria
        }
    };
}

module.exports = {updateStory};
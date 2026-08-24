const getStoryByIdProvider = require("../providers/getStoryById.provider.js");
const getSubtasksByStoryIdProvider = require("../providers/getSubtasksByStoryId.provider.js");

const {StatusCodes} = require("http-status-codes");
 
const getStoryById = async (id) => {
       const story = await getStoryByIdProvider.getStoryById(id);

       if(!story){
           const error = new Error("Story Not Found!");
           error.statusCode = 404;
           throw error;
       }

       const subTasks = await getSubtasksByStoryIdProvider.getSubtasksByStoryId(story.id);

       return {
          id: story.id,
          storyCode: story.story_code,
          featureId: story.feature_id,
          title: story.title,
          description: story.description,
          acceptanceCriteria: story.acceptance_criteria,
          status: story.status,
          subtasks: subTasks
       };
};

module.exports = {getStoryById};
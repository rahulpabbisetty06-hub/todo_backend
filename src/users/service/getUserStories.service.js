const checkUserProvider = require("../providers/checkUser.provider.js");
const getUserStoriesProvider = require("../providers/getUserStories.provider.js");

const getUserStories = async (userId) => {
     const user = await checkUserProvider.checkUser(userId);

     if(!user){
        const error = new Error();
        error.statusCode = 404;
        throw error;
     }

     const stories = await getUserStoriesProvider.getUserStories(userId);

     return {
        userId: user.id,
        stories: stories
     }
}

module.exports = {
    getUserStories
};
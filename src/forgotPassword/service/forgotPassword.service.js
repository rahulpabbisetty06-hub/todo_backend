const forgotPasswordProvider = require("../providers/forgotPassword.provider.js");

const getSecurityQuestion = async (data) => {

    const { username } = data;

    const user = await forgotPasswordProvider.getSecurityQuestion(username);

    console.log(user);

    if (!user) {
        throw new Error("Username not found!");
    }

    return {
        securityQuestion: user.security_question
    };
};

module.exports = {
    getSecurityQuestion
};
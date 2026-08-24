const bcrypt = require("bcrypt");
const signupProvider = require("./providers/signup.provider.js");

const signup = async (data) => {

    const {
        username,
        password,
        securityQuestion,
        securityAnswer
    } = data;

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Hash security answer
    const hashedSecurityAnswer = await bcrypt.hash(
        securityAnswer,
        10
    );

    // Save user
    const user = await signupProvider.createUser({
        username,
        password: hashedPassword,
        securityQuestion,
        securityAnswer: hashedSecurityAnswer
    });

    return {
        message: "Account created successfully",
        user: {
            id: user.id,
            username: user.username
        }
    };
};

module.exports = {
    signup
};
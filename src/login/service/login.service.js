const loginProvider = require("../providers/login.provider.js");
const bcrypt = require("bcrypt");
const { generateToken } = require("./generateToken.service.js");
const { StatusCodes } = require("http-status-codes");

const login = async (loginData) => {

    const { username, password } = loginData;

    // Check whether the user exists
    const user = await loginProvider.getUserByUsername(username);

    if (!user) {
        const error = new Error("Invalid username or password");
        error.statusCode = StatusCodes.UNAUTHORIZED;
        throw error;
    }

    // Compare password
    const isPasswordCorrect = await bcrypt.compare(
        password,
        user.hash_password
    );

    if (!isPasswordCorrect) {
        const error = new Error("Invalid username or password");
        error.statusCode = StatusCodes.UNAUTHORIZED;
        throw error;
    }

    // Generate JWT Token
    const accessToken = generateToken(user);

    return {
        user: {
            id: user.id,
            username: user.username
        },
        accessToken
    };
};

module.exports = {
    login
};
const loginService = require("./service/login.service.js");
const { StatusCodes } = require("http-status-codes");

const handleLogin = async (req, res) => {
    try {
        const result = await loginService.login(req.body);

        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Login successful",
            data: result
        });

    } catch (error) {

        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: error.message || "Something went wrong"
        });

    }
};

module.exports = { handleLogin };
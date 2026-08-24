const jwtToken = require("jsonwebtoken");

const generateToken = (user) => {
     const payload = {
        id : user.id,
        username : user.username
     };

     const token = jwtToken.sign(payload,process.env.JWT_SECRET,{expiresIn:"1d"});

     return token;
}

module.exports = {generateToken};
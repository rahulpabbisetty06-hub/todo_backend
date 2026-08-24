const bcrypt = require("bcrypt");

const updatePasswordProvider = require("../providers/updatePassword.provider");


const resetPassword = async (body) => {
    const {username,securityAnswer,newPassword} = body;
    console.log(username);
    
    const user  = await updatePasswordProvider.getUserByUsername(username);
    
    if(!user){
        throw new Error("Username not found");
    }
    //console.log("user:", user);
    //console.log("securityAnswer:", securityAnswer);
    
    //console.log("user.security_answer:", user.security_answer);
    const isAnswerCorrect = await bcrypt.compare(securityAnswer,
        user.security_answer);

    if(!isAnswerCorrect){
        throw new Error("Incorrect answer entered. please try again!");
    }

    const hashedPassword = await bcrypt.hash(newPassword,10);

    await updatePasswordProvider.updatePassword(user.id,hashedPassword);

    return{
        message: "Password updated successfully",
    };


}


module.exports = { resetPassword };
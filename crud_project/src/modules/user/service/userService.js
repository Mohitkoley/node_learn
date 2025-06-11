import mongoose  from "mongoose";
import User from "../../../models/user.js";

const serviceUserLogin =  async ( email, password) => {

    const user = await User.findOne({email: email});
    if(!user){
        throw new Error("User not found");
    }
    if(user.password != password){
        throw new Error("Invalid password");
    }
    return user;

}

const serviceUserRegister = async (name, email, password) => {
    user = new User({
        name: name,
        email: email,
        password: password
    });
    user.save();
    return user;
}

export {
    serviceUserLogin, 
    serviceUserRegister
}
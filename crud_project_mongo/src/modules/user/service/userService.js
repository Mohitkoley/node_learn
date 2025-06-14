import bcrypt from "bcrypt";
import { config } from 'dotenv';
import jwt from 'jsonwebtoken';
import User from "../../../models/user.js";
config({
    path: `./env/.${process.env.NODE_ENV}.env`
  });

  const SECRET_KEY = process.env.SECRET_KEY;

const serviceUserLogin =  async ( email, password) => {


    const user = await User.findOne({email: email});
    if(!user){
        throw new Error("User not found");
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
    return res.status(401).json({ error: 'Authentication failed' });
    }
    const token = jwt.sign({ userId: user._id }, SECRET_KEY, {
        expiresIn: '365 days',
    });    
    return {user, token};

}

const serviceUserRegister = async (name, email, password) => {

    const existingUser = await User.findOne({email: email});
    if(existingUser){
        throw new Error("User already exists");
    }
    const hashedPassword = await bcrypt.hash(password,10 );
    const user = new User({
        name: name,
        email: email,
        password: hashedPassword
    });
    user.save();
    return user;
}

export {
    serviceUserLogin,
    serviceUserRegister
};

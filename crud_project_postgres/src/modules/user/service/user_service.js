import bcrypt from "bcrypt";
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import User from "../models/user.js";
dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;
class UserService {
    static async registerUser(name, email, password) {
        const existingUser = await User.findOne({ where: { email: email } });
        if(existingUser){
            throw new Error("User already exists");
        }
        const hashedPassword = await bcrypt.hash(password,10 );
        var user = await User.create({
           name: name,
           email: email,
           password: hashedPassword
        });
       user.password = password;
       return user;
    }

    static async loginUser(email, password) {
        const user = await User.findOne({where: {email: email}});
        if(!user){
            throw new Error("User not found");
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            throw new Error("Password not match");
        }
        const token = jwt.sign({ userId: user.id }, SECRET_KEY, {
            expiresIn: '365 days',
        });  
        user.password = password;
        return {user, token};
    }

    static async getUserById(id) {
        const user = await User.findByPk(id);
        return user;
    }
}


export default UserService;




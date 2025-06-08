import mongoose from "mongoose";

import { config } from 'dotenv';
config({
    path: `./env/.${process.env.NODE_ENV}.env`
  });

var mongoUrl = process.env.MONGODB_URL;
console.log(mongoUrl);
var connectDb = async () => {
    try {
        await mongoose.connect(mongoUrl,{
        
            
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
    }
}

export default connectDb;
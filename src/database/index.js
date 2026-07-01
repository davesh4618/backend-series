import mongoose from "mongoose";
import {db_name} from "../constants.js"
import { configDotenv } from "dotenv";
const dbconnect = async () => {
  try {
   const connectioninstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.db_name}`)
   console.log(`db connected successfully, ${connectioninstance.connection.host}`);
   
    
  } catch (error) {
    console.log(`error occur here    :::::` ,error);
    
  }
}

export default dbconnect
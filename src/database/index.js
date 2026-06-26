import mongoose from "mongoose";
import {db_name} from "../constants.js"

const connectDB = async () => {
  try{
  const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`)
  console.log(`MongoDB connected: ${connection.connection.host}`)
  }
  catch(err){
    console.log(`Error connecting to MongoDB: ${err}`)
  }
}

export default connectDB  
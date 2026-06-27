import mongoose from "mongoose";
import 'dotenv/config'
import connectDB from "./database/index.js";
import app from "./app.js";


connectDB()
.then(()=>{
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
    app.get('/', (req, res) => {
      res.send('Hello World! ');
  } )
})})

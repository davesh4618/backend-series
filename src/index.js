import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import app from "./app.js";
import dbconnect  from "./database/index.js";
configDotenv();


dbconnect()
.then(()=>{
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
    app.get('/', (req, res) => {
      res.send('Hello World! ');
  } )
})})

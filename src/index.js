import mongoose from "mongoose";

import express from "express"
const app = express()

app.get("/",(req,res)=>{
  res.send("helloooooo")
})

app.listen(3000)
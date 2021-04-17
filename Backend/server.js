const express = require('express');
const app = express();
const mongoose = require('mongoose')
const routesUrls=require("./routes")
mongoose.connect("mongodb+srv://mayank:9772667600@cluster0.towwl.mongodb.net/mytable?retryWrites=true&w=majority",()=>console.log("db connected"));
const cors = require('cors');



app.use(express.json())
app.use(cors())
app.use("/app",routesUrls);


app.listen(4000,()=>console.log("done1"))
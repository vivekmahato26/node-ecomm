const {json, urlencoded } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const productRouter = require("./routes/productRouter");

dotenv.config();

const app = express();

const mongoUser = process.env.MONGO_USER;
const mongoPass = process.env.MONGO_PASS;
const mongoDb = process.env.MONGO_DB;
const mongoUrl = "mongodb+srv://"+mongoUser+":"+mongoPass+"@cluster0.r1oratx.mongodb.net/"+mongoDb
mongoose.connect(mongoUrl,(err) => {
    if(err) console.log(err);
    else console.log("DB connected")
});


app.use("/products",productRouter);

app.listen(8000, () => console.log("server running at 8000"))
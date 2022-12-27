const {json, urlencoded } = require("express");
const express = require("express");
const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// dotenv.config();
require("dotenv").config();

const cors = require("cors");


const auth = require("./middlewares/auth");

const productRouter = require("./routes/productRouter");
const couponRouter = require("./routes/couponRouter");
const userRouter = require("./routes/userRouter");
const rzpRouter = require("./routes/rzpRouter");
const paymentRouter = require("./routes/paymentRouter");
const addressRouter = require("./routes/addressRouter");
const ordersRouter = require("./routes/ordersRouter");
const cartRouter = require("./routes/cartRouter");

const app = express();

app.use(cors())
app.use(json());
app.use(urlencoded({extended:false}));
app.use(auth);

const mongoUser = process.env.MONGO_USER;
const mongoPass = process.env.MONGO_PASS;
const mongoDb = process.env.MONGO_DB;
const mongoUrl = "mongodb+srv://"+mongoUser+":"+mongoPass+"@cluster0.r1oratx.mongodb.net/"+mongoDb
mongoose.connect(mongoUrl,(err) => {
    if(err) console.log(err);
    else console.log("DB connected")
});

app.use("/products",productRouter);
app.use("/coupons",couponRouter);
app.use("/users",userRouter);
app.use("/rzp",rzpRouter)
app.use("/payment",paymentRouter)
app.use("/address", addressRouter);
app.use("/orders", ordersRouter);
app.use("/cart", cartRouter);

app.listen(8000, () => console.log("server running at 8000"))
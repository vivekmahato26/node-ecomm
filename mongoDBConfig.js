const {MongoClient} = require("mongodb");


const mongoUser = process.env.MONGO_USER;
const mongoPass = process.env.MONGO_PASS;
const mongoDb = process.env.MONGO_DB;
const mongoUrl = "mongodb+srv://"+mongoUser+":"+mongoPass+"@cluster0.r1oratx.mongodb.net/"

const client = new MongoClient(mongoUrl);

const db = client.db(mongoDb);

exports.addressCollection = db.collection("address");

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    coupons: {
        type: [mongoose.SchemaTypes.ObjectId],
        required: false,
        ref: "couponsModel"
    },
    order: {
        type: [mongoose.SchemaTypes.String],
        required: false,
        // ref: "ordersModel"
    },
    cart: {
        type: mongoose.SchemaTypes.String,
        required: false,
        // ref: "cartModel"
    },
    address: {
        type: [mongoose.SchemaTypes.String],
        required: false,
        // ref: "addressModel"
    },
    access: {
        type: mongoose.SchemaTypes.String,
        required: true
    }
})

module.exports = mongoose.model("userModel",userSchema);
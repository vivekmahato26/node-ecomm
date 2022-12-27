const {Schema,SchemaTypes,model} = require("mongoose");

const orderSchema = new Schema({
    cart: {
        type: SchemaTypes.ObjectId,
        required: true,
        ref: "cartModel"
    },
    address : {
        type: SchemaTypes.String,
        required: true,
        // ref: "cartModel"
    },
    payment : {
        type: SchemaTypes.String,
        required: true,
        // ref: "cartModel"
    },
    coupon: {
        type: SchemaTypes.ObjectId,
        required: false,
        ref: "couponsModel"
    },
    tax : {
        type: SchemaTypes.String,
        required: false,
    },
    taxId : {
        type: SchemaTypes.String,
        required: false,
    },
})

module.exports = model("orderModel", orderSchema);
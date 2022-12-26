const {Schema,SchemaTypes,model} = require("mongoose");

const ItemsSchema = new Schema({
    product: {
        type: SchemaTypes.ObjectId,
        required: true,
        ref: "ProductsModel"
    },
    quantity: {
        type: SchemaTypes.Number,
        required: true
    }
})

const CartSchema = new Schema({
    items: {
        type: [ItemsSchema],
        required: false
    },
    totalPrice : {
        type: SchemaTypes.Number,
        required: true
    },
    totalQuantity : {
        type: SchemaTypes.Number,
        required: true
    }
})

module.exports = model("cartModel",CartSchema);
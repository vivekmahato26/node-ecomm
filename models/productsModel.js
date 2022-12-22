const mongoose = require("mongoose");

const dataTypes = mongoose.SchemaTypes;

const imageSchema = new mongoose.Schema({
    main: {
        type: dataTypes.String,
        required: true
    },
    img1: {
        type: dataTypes.String,
        required: false
    },
    img2: {
        type: dataTypes.String,
        required: false
    },
    img3: {
        type: dataTypes.String,
        required: false
    },
    img4: {
        type: dataTypes.String,
        required: false
    },
    img5: {
        type: dataTypes.String,
        required: false
    },
    img6: {
        type: dataTypes.String,
        required: false
    },
})

const productsSchema = new mongoose.Schema({
    name: {
        type: dataTypes.String,
        required: true
    },
    price: {
        type: dataTypes.Number,
        required: true
    },
    category: {
        type: [dataTypes.String],
        required: true
    },
    description: {
        type: dataTypes.String,
        required: true
    },
    stock: {
        type: dataTypes.Number,
        required: true
    },
    discount: {
        type: dataTypes.ObjectId,
        required: false,
        ref: "couponsModel"
    },
    color: {
        type: [dataTypes.String],
        required: true
    },
    sizes: {
        type: [dataTypes.String],
        required: true
    },
    fits: {
        type: [dataTypes.String],
        required: true
    },
    thumbnail: {
        type: imageSchema,
        required: true
    },
    images: {
        type: imageSchema,
        required: true
    },
    brand: {
        type: dataTypes.String,
        required: true
    },
    pattern: {
        type: [dataTypes.String],
        required: true
    },
    createdAt: {
        type: dataTypes.String,
        required: true
    },
    updatedAt: {
        type: dataTypes.String,
        required: true
    },
    
});

module.exports = mongoose.model("productsModel",productsSchema);
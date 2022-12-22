const productsModel = require("../models/productsModel");

exports.addProduct = async (data) => {
    try {
        const product = await productsModel.create({
            ...data.body,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        return product;
    } catch (error) {
        return ({ err: error.message })
    }
}
exports.updateProduct = async (data) => {
    try {
        const {productId} = data.params;
        const updatedProduct = await productsModel.findByIdAndUpdate(productId, {
            ...data.body
        }, {new: true}) 
        return updatedProduct;
    } catch (error) {
        return ({ err: error.message })
    }
}
exports.deleteProduct = async (data) => {
    try {
        const {productId} = data.params;
        const deleteProd = await productsModel.findByIdAndDelete(productId);
        return ({msg: "Product Deleted"})
    } catch (error) {
        return ({ err: error.message })
    }
}
exports.allProduct = async (data) => {
    try {
        const {limit,page} = data.query;
        const products = await productsModel.find({}).skip(limit*(page-1)).limit(limit).sort({updatedAt: 'descending'});
        return products;
    } catch (error) {
        return ({ err: error.message })
    }
}
exports.getProduct = async (data) => {
    try {
        const {productId} = data.params;
        const product = await productsModel.findById(productId);
        return (product)
    } catch (error) {
        return ({ err: error.message })
    }
}
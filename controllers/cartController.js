const { cartCollection } = require("../mongoDBConfig");
const cartModel = require("../models/cartModel");
const usersModel = require("../models/userModel");
const mongodb = require("mongodb");
exports.get = async (data) => {
    try {
        const cart = await cartModel.findById(data.params.cartId);
        return cart;
        // const cartId = new mongodb.ObjectId(data.params.cartId);
        // const cart = await cartCollection.findOne({_id: cartId});
        // return cart;
    } catch (error) {
        return ({ err: error.message })
    }
}
exports.deleteCart = async (data) => {
    try {
        const user = await usersModel.findByIdAndUpdate(data.userId, {
            cart: null
        })
        return user;
        // const user = await usersModel.findByIdAndUpdate(data.userId, {
        //     cart: null
        // })
        // return cart;
    } catch (error) {
        return ({ err: error.message })
    }
}
exports.create = async (data) => {
    try {
        const cart = await cartModel.create(data.body);
        const user = await usersModel.findByIdAndUpdate(data.userId, {
            cart: cart._id
        })
        return cart;
        // const cart = await cartCollection.insertOne(data.body);
        // const cartId = await cart.id;
        // const user = await usersModel.findByIdAndUpdate(data.userId, {
        //     cart: cartId
        // })
        // return cart;
    } catch (error) {
        return ({ err: error.message })
    }
}
exports.update = async (data) => {
    try {
        const cart = await cartModel.findByIdAndUpdate(data.params.cartId, {...data.body},{new:true});
        return cart;
        // const cartId = new mongodb.ObjectId(data.params.cartId);
        // const cart = await cartCollection.findOneAndUpdate({_id: cartId},{...data.body});
        // return cart;
    } catch (error) {
        return ({ err: error.message })
    }
}
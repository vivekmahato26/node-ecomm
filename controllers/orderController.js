// get,getAll,update,create

const orderModel = require("../models/orderModel");
const userModel = require("../models/userModel");

exports.get = async(data) => {
    try {
        const {orderId} = data.params;
        const order = await orderModel.findById(orderId);
        return order;
    } catch (error) {
        return({err: error.message})
    }
}
exports.getAll = async(data) => {
    try {
        const order = await orderModel.find({});
        return order;
    } catch (error) {
        return({err: error.message})
    }
}
exports.update = async(data) => {
    try {
        const {orderId} = data.params;
        const order = await orderModel.findByIdAndUpdate(orderId,{...data.body},{new:true});
        return order;
    } catch (error) {
        return({err: error.message})
    }
}
exports.create = async(data) => {
    try {
        const order = await orderModel.create({...data.body})
        const user = await userModel.findByIdAndUpdate(data.userId,{$push:{orders:order._id}});
        return order;
    } catch (error) {
        return({err: error.message})
    }
}
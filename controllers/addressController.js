const mongodb = require("mongodb");

const { addressCollection } = require("../mongoDBConfig");
const userModel = require("../models/userModel");

exports.addAddress = async (data) => {
    try {
        const {body} = data;
        const address = addressCollection.insertOne(body);
        const addressId = await address.insertedId;
        const updatedUser = await userModel.findByIdAndUpdate(data.userId,{
            $push:{address: addressId}
        })
        return address;
    } catch (error) {
        return ({ err: error.message })
    }
}
exports.get = async (data) => {
    try {
        const {addressId} = data.params;
        const id = new mongodb.ObjectId(addressId);
        const address = await addressCollection.findOne({_id: id});
        return address;
    } catch (error) {
        return ({ err: error.message })
    }
}
exports.updateAddress = async (data) => {
    try {
        const {addressId} = data.params;
        const id = new mongodb.ObjectId(addressId);
        const address = await addressCollection.findOneAndUpdate({_id: id},{
            ...data.body
        });
        return address;
    } catch (error) {
        return ({ err: error.message })
    }
}
exports.deleteAddress = async (data) => {
    try {
        const {addressId} = data.params;
        const id = new mongodb.ObjectId(addressId);
        const address = await addressCollection.findOneAndDelete({_id: id});
        const updatedUser = await userModel.findByIdAndUpdate(data.userId,{
            $pull:{address: addressId}
        })
        return {msg: "address deleted"};
    } catch (error) {
        return ({ err: error.message })
    }
} 
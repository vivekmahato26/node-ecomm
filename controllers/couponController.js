const couponsModel = require("../models/couponsModel");
const productsModel = require("../models/productsModel");
const usersModel = require("../models/userModel");

exports.addCoupon = async (data) => {
    try {
        const { title,
            description,
            code,
            discount,
            minOrder,
            maxDiscount,
            type,
            expiry,
            ref
         } = data.body;
         const createdAt = new Date();
         const updatedAt = new Date();
         const coupon = await couponsModel.create({title,description,code,discount,minOrder,maxDiscount,type,expiry,ref,createdAt,updatedAt});
         const couponId = coupon._id;
         const entity = ref.split("<=>")[0];
         const entityId = ref.split("<=>")[1];
         if(entity == "product") {
            const productUpdate = await productsModel.findByIdAndUpdate(entityId, {discount: couponId});
         }
         if(entity == "user") {
            const updateUser = await usersModel.findByIdAndUpdate(entityId,{
                $push:{coupon: couponId}
            })
         }
         return coupon;
    } catch (error) {
        return ({err:error.message});
    }
}
exports.updateCoupon = async (data) => {
    try {
        const { couponId } = data.params;
        const coupon = await couponsModel.findByIdAndUpdate(couponId, {
            ...data.body
        }, { new: true });
        return coupon
    } catch (error) {
        return ({ err: error.message })
    }
}
exports.deleteCoupon = async (data) => {
    try {
        const { couponId } = data.params;
        const {ref} = await couponsModel.findById(couponId);
        const entity = ref.split("<=>")[0];
         const entityId = ref.split("<=>")[1];
         if(entity == "product") {
            const productUpdate = await productsModel.findByIdAndUpdate(entityId, {discount: null});
         }
         if(entity == "user") {
            const updateUser = await usersModel.findByIdAndUpdate(entityId,{
                $pull:{coupon: couponId}
            })
         }
        const coupon = await couponsModel.findByIdAndDelete(couponId);
        return ({ msg: "Coupon Deleted" })
    } catch (error) {
        return ({ err: error.message })
    }
}
exports.get = async (data) => {
    try {
        const { couponId } = data.params;
        const coupon = await couponsModel.findById(couponId);
        return coupon
    } catch (error) {
        return ({ err: error.message })
    }
}

// find({$and:[{{ref:"global"},{expiry: { $gte: new Date() }}]})

exports.getAll = async (data) => {
    try {
        const { page, limit } = data.query;
        const coupons = await couponsModel.find({ $and: [{ ref: "global" }, { expiry: { $gte: new Date() } }] }).skip(limit * (page - 1)).limit(limit).sort({ updatedAt: "descending" });
        return coupons
    } catch (error) {
        return ({ err: error.message })
    }
}
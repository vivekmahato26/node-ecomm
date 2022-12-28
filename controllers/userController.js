const userModel = require("../models/userModel");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const Crpyto = require("crypto-js");

exports.createUser = async (data) => {
    try {
        const { email, phone, password } = data;
        const checkEmail = await userModel.find({ email });
        if (checkEmail.length) {
            return ({ err: "Email alreay registered" })
        }
        const checkPhone = await userModel.find({ phone });
        if (checkPhone.length) {
            return ({ err: "Phone alreay registered" })
        }
        const salt = await bcrypt.genSalt();
        const hashedPass = await bcrypt.hash(password, salt)
        const userData = await userModel.create({
            ...data,
            password: hashedPass
        });
        return userData;
    } catch (error) {
        return ({ err: error.message })
    }
}

exports.login = async (data) => {
    try {
        const { email, password } = data;
        const checkEmail = await userModel.find({ email });
        if (checkEmail.length) {
            const checkPass = await bcrypt.compare(password, checkEmail[0].password);
            if (checkPass) {
                const token = Crpyto.AES.encrypt(JSON.stringify({
                    userId: checkEmail[0]._id,
                    email: checkEmail[0].email,
                    access: checkEmail[0].access
                }), process.env.JWT_SECRET).toString()
                return {
                    token,
                    email,
                    userId: checkEmail[0]._id,
                    access: checkEmail[0].access
                }
            } else {
                return ({ err: "Wrong Password" })
            }
        } else {
            return ({ err: "Email not found" })
        }
    } catch (error) {
        return ({ err: error.message })
    }
}

exports.updatePassword = async (data) => {
    try {
        const { body, userId } = data;
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(body.password, salt);
        const updatedUser = await userModel.findByIdAndUpdate(userId, { password: hashedPass },{new:true});
        return updatedUser;
    } catch (error) {
        return ({ err: error.message })
    }
}
exports.updateUser = async (data) => {
    try {
        const { body, userId } = data;
        const updatedUser = await userModel.findByIdAndUpdate(userId, { ...body },{new:true});
        return updatedUser;
    } catch (error) {
        return ({ err: error.message })
    }
}
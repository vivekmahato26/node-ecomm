const { Router } = require("express");
const { createUser, login,updatePassword, updateUser } = require("../controllers/userController");

const userRouter = new Router();

userRouter.post("/createUser",async (req,res) => {
    try {
        const response =await createUser(req.body);
        res.send(response);
        res.end();
    } catch (error) {
        res.send({err: error.message});
        res.end();
    }
})

userRouter.post("/login",async (req,res) => {
    try {
        const response =await login(req.body);
        res.send(response);
        res.end();
    } catch (error) {
        res.send({err: error.message});
        res.end();
    }
})

userRouter.post("/updatePassword", async (req,res)=> {
    if(req.isAuth) {
        const response =await updatePassword(req);
        res.send(response);
        res.end();
    } else {
        res.send({err: "Please Login!!!"})
        res.end()
    }
})
userRouter.post("/updateUser", async (req,res)=> {
    if(req.isAuth) {
        const response =await updateUser(req);
        res.send(response);
        res.end();
    } else {
        res.send({err: "Please Login!!!"})
        res.end()
    }
})

module.exports = userRouter;
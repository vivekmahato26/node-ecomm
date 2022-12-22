const {Router} = require("express");
const { addCoupon, get, updateCoupon, deleteCoupon, getAll } = require("../controllers/couponController");

const couponRouter = new Router();

couponRouter.post("/add",async(req,res)=> {
    try {
        const response = await addCoupon(req);
        res.send(response);
        res.end();
    } catch (error) {
        res.send({err:error.message});
        res.end();
    }
})
couponRouter.get("/:couponId",async(req,res)=> {
    try {
        const response = await get(req);
        res.send(response);
        res.end();
    } catch (error) {
        res.send({err:error.message});
        res.end();
    }
})
couponRouter.put("/update/:couponId",async(req,res)=> {
    try {
        const response = await updateCoupon(req);
        res.send(response);
        res.end();
    } catch (error) {
        res.send({err:error.message});
        res.end();
    }
})
couponRouter.delete("/delete/:couponId",async(req,res)=> {
    try {
        const response = await deleteCoupon(req);
        res.send(response);
        res.end();
    } catch (error) {
        res.send({err:error.message});
        res.end();
    }
})
couponRouter.get("/all",async(req,res)=> {
    try {
        const response = await getAll(req);
        res.send(response);
        res.end();
    } catch (error) {
        res.send({err:error.message});
        res.end();
    }
})


module.exports = couponRouter;
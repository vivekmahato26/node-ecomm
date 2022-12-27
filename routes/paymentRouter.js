const {Router} = require("express");

const paymentRouter = new Router();
const {get,getAll,update} = require("../controllers/paymentController");

paymentRouter.get("/", async(req,res) => {
    try {
        if(req.isAuth) {
            if(req.access === "admin") {
                const resp = await get(req);
                res.send(resp)
                res.end()
            } else {
                const err = new Error("Unauthorized Access");
                res.send({ err: err.message });
                res.end();
            }
        } else {
            const err = new Error("Unauthenticated Access");
            res.send({ err: err.message });
            res.end();
        }
    } catch (error) {
        res.send({err:error.message});
        res.end();
    }
})
paymentRouter.get("/:paymentId", async(req,res) => {
    try {
        if(req.isAuth) {
            const resp = await getAll(req);
            res.send(resp)
            res.end();
        } else {
            const err = new Error("Unauthenticated Access");
            res.send({ err: err.message });
            res.end();
        }
    } catch (error) {
        res.send({err:error.message})
        res.end();
    }
})
paymentRouter.patch("/update/:paymnetId", async(req,res) => {
    try {
        if(req.isAuth) {
            if(req.access === "customer") {
                const resp = await update(req);
                res.send(resp)
                res.end();
            } else {
                const err = new Error("Unauthorized Access");
                res.send({ err: err.message });
                res.end();
            }
        } else {
            const err = new Error("Unauthenticated Access");
            res.send({ err: err.message });
            res.end();
        }
    } catch (error) {
        res.send({err:error.message})
        res.end();
    }
})

module.exports = paymentRouter;
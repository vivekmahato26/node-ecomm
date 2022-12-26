const {Router} = require("express");

const paymentRouter = new Router();
const {get,getAll,update} = require("../controllers/paymentController");

paymentRouter.get("/", async(req,res) => {
    try {
        const resp = await get(req);
        res.send(resp)
    } catch (error) {
        res.send({err:error.message})
    }
})
paymentRouter.get("/:paymentId", async(req,res) => {
    try {
        const resp = await getAll(req);
        res.send(resp)
    } catch (error) {
        res.send({err:error.message})
    }
})
paymentRouter.patch("/update/:paymnetId", async(req,res) => {
    try {
        const resp = await update(req);
        res.send(resp)
    } catch (error) {
        res.send({err:error.message})
    }
})

module.exports = paymentRouter;
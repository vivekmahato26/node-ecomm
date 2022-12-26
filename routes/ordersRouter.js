const {Router, request} = require("express");

const orderRouter = new Router();

const {get,getAll,update,create} = require("../controllers/orderController");

orderRouter.post("/create", async(req,res) => {
    try {
        const resp = await create(req);
        res.send(resp)
    } catch (error) {
        res.send({err:error.message})
    }
})
orderRouter.get("/", async(req,res) => {
    try {
        const resp = await getAll(req);
        res.send(resp)
    } catch (error) {
        res.send({err:error.message})
    }
})
orderRouter.get("/:orderId", async(req,res) => {
    try {
        const resp = await get(req);
        res.send(resp)
    } catch (error) {
        res.send({err:error.message})
    }
})
orderRouter.patch("/update/:orderId", async(req,res) => {
    try {
        const resp = await update(req);
        res.send(resp)
    } catch (error) {
        res.send({err:error.message})
    }
})

module.exports = orderRouter;
const {Router} = require("express");
const { create,deleteCart, get, update } = require("../controllers/cartController");

const cartRouter = new Router();

cartRouter.post("/create", async(req,res) => {
    try {
        const response = await create(req);
        res.send(response)
    } catch (error) {
        res.send({err: error.message})
    }
})
cartRouter.patch("/update/:cartId", async(req,res) => {
    try {
        const response = await update(req);
        res.send(response)
    } catch (error) {
        res.send({err: error.message})
    }
})
cartRouter.delete("/delete/:cartId", async (req,res) => {
    try {
        const response = await deleteCart(req);
        res.send(response)
    } catch (error) {
        res.send({err: error.message})
    }
})
cartRouter.get("/:cartId", async(req,res) => {
    try {
        const response = await get(req);
        res.send(response)
    } catch (error) {
        res.send({err: error.message})
    }
})
// cartRouter.get("/", (req,res) => {
//     try {
        
//     } catch (error) {
//         res.send({err: error.message})
//     }
// })
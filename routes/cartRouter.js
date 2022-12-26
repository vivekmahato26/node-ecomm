const {Router} = require("express");

const cartRouter = new Router();

cartRouter.post("/create", (req,res) => {
    try {
        
    } catch (error) {
        res.send({err: error.message})
    }
})
cartRouter.patch("/update/:cartId", (req,res) => {
    try {
        
    } catch (error) {
        res.send({err: error.message})
    }
})
cartRouter.delete("/delete/:cartId", (req,res) => {
    try {
        
    } catch (error) {
        res.send({err: error.message})
    }
})
cartRouter.get("/:cartId", (req,res) => {
    try {
        
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
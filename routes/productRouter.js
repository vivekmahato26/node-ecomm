const {Router} = require("express");
const { addProduct, allProduct, updateProduct, deleteProduct, getProduct } = require("../controllers/productController");


const productRouter = new Router();

productRouter.post("/create", async (req,res) => {
    try {
        const response = await addProduct(req);
        res.send(response);
        res.end();
    } catch (error) {
        res.send({err: error.message});
        res.end();
    }
})
productRouter.get("/all", async (req,res) => {
    try {
        const response = await allProduct();
        res.send(response);
        res.end();
    } catch (error) {
        res.send({err: error.message});
        res.end();
    }
})
productRouter.patch("/update/:productId", async (req,res) => {
    try {
        const response = await updateProduct(req);
        res.send(response);
        res.end();
    } catch (error) {
        res.send({err: error.message});
        res.end();
    }
})
productRouter.delete("/delete/:productId", async (req,res) => {
    try {
        const response = await deleteProduct(req);
        res.send(response);
        res.end();
    } catch (error) {
        res.send({err: error.message});
        res.end();
    }
})
productRouter.get("/:productId", async (req,res) => {
    try {
        const response = await getProduct(req);
        res.send(response);
        res.end();
    } catch (error) {
        res.send({err: error.message});
        res.end();
    }
})


module.exports = productRouter;
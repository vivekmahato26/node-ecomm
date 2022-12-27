const { Router } = require("express");
const { addAddress, get, updateAddress, deleteAddress } = require("../controllers/addressController");

const addressRouter = new Router();

addressRouter.post("/add", async (req, res) => {
    try {
        if (req.isAuth) {
            if (req.access === "customer") {
                const response = await addAddress(req);
                res.send(response);
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
        res.send({ err: error.message });
        res.end();
    }
})
addressRouter.get("/:addressId", async (req, res) => {
    try {
        if(req.isAuth) {
            const response = await get(req);
            res.send(response);
            res.end();
        } else {
            const err = new Error("Unauthenticated Access");
            res.send({ err: err.message });
            res.end();
        }
    } catch (error) {
        res.send({ err: error.message });
        res.end();
    }
})
addressRouter.put("/update/:addressId", async (req, res) => {
    try {
        if(req.isAuth) {
            if(req.access === "customer") {
                const response = await updateAddress(req);
                res.send(response);
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
        res.send({ err: error.message });
        res.end();
    }
})
addressRouter.delete("/delete/:addressId", async (req, res) => {
    try { 
        if(req.isAuth) {
            if(req.access === "customer") {
                const response = await deleteAddress(req);
                res.send(response);
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
        res.send({ err: error.message });
        res.end();
    }
})


module.exports = addressRouter;
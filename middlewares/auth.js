const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const authHeader = req.get("Authorization");
    if (!authHeader) {
        req.isAuth = false;
        return next();
    }
    const token = authHeader.split(" ")[1];
    if (!token) {
        req.isAuth = false;
        return next();
    }
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const keys = Object.keys(decodedToken);
        if (keys.length) {
            req.isAuth = true;
            req.userId = decodedToken.userId;
            req.email = decodedToken.email;
            req.access = decodedToken.access;
            return next();
        } else {
            req.isAuth = false;
            return next();
        }

    } catch (error) {
        console.log(error)
        req.isAuth = false;
        return next();
    }

}
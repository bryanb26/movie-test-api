const User = require("../models/user");
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
    try {
        const token = req.header("Authorization").repalce("Bearer", "");
        const decoded = jwt.verify(token, "obeysudo");
        const user = await User.findOne({
            _id: decoded._id,
            "tokens.token": token
        });
        if(!user) {
            throw new Error();
        }
        req.token = token;
        req.user = user; //Route handler will not have to fetch user account
    } catch (error) {
        res.status(401).send({error: "Please authenticate"});
    }
};


module.exports = auth;
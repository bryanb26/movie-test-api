const express = require('express');
const User = require("../models/user");
const auth = require("../middleware/auth");
const router = new express.Router();

router.post("/users", async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        const token = await user.generateToken();
        res.send({user, token});
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
});

router.post("/users/login", async (req, res) => {
    try {
        const user = await User.findByCredentials(
            req.body.email, 
            req.body.password
        );
        const token = await user.generateToken();
        res.send({user, token});
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post("/users/logout", auth, async(req,res) =>{
    try {
        req.user.tokens = req.user.tokens.filter(token => {
            return token.token !== req.token;
        });
        await req.user.save();
        res.send("You have logged out");
    } catch (error) {
        res.status(400).send(error);
    }
});
router.get("/users", async (req, res) => {
    try {
        let users = await User.find({year: '2019'});
        res.send(users);
    } catch (error) {
        res.status(500).send(error); 
    }
})

router.get("/users/me", auth, async (req,res) => {
    res.send(req.user);
});
router.get("/users/:id", async (req, res) => {
    try {
        let users = await User.findById(req.params.id);
        res.send(users);
    } catch (error) {
        res.status(500).send(error); 
    }
})

router.delete("/users/:id", async (req,res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.patch("/users/:id", async (req,res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["name", "email", "graduated"];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update)
    );
    try {
       const user = await User.findByIdAndUpdate(req.params.id, req.body);
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});
module.exports = router;
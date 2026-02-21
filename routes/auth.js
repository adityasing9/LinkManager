const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const SECRET = "mysupersecretkey";

router.post("/register", async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
    });

    await user.save();
    res.json({ message: "User registered" });
});

router.post("/login", async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const valid = await bcrypt.compare(req.body.password, user.password);
    if (!valid) return res.status(400).json({ message: "Invalid password" });

    const token = jwt.sign({ id: user._id }, SECRET);
    res.json({ token });
});

module.exports = router;
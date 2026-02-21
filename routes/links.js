const router = require("express").Router();
const Link = require("../models/Link");

router.post("/", async (req, res) => {
    const link = new Link(req.body);
    await link.save();
    res.json(link);
});

router.get("/:userId", async (req, res) => {
    const links = await Link.find({ userId: req.params.userId });
    res.json(links);
});

router.delete("/:id", async (req, res) => {
    await Link.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
});

module.exports = router;
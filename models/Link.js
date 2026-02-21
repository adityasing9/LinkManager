const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema({
    userId: String,
    title: String,
    url: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Link", linkSchema);
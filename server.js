
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const authRoute = require("./routes/auth");
const linkRoute = require("./routes/links");

const app = express();   // ⚠️ MUST come before app.use()

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.use("/api/auth", authRoute);
app.use("/api/links", linkRoute);

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));



app.listen(process.env.PORT || 5000, "0.0.0.0", () => {
    console.log("Server running");
});
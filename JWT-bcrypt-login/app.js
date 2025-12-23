const express = require("express");
const app = express();
const mongoose = require("mongoose");
const registerRouter = require("./router/register");
const User = require("./models/user");

mongoose.connect("mongodb://127.0.0.1:27017/testDB")
.then(() => console.log("connected!!"))
.catch(err => {
    console.log(err);
})
app.use(express.json());
app.use("/register", registerRouter);

const port = 5000;
app.listen(port, () => {
    console.log(`Connected to port ${port}...`);
});
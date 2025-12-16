const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
app.use(express.json());
const User = require("./models/User");

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch(err => {
        console.log(err);
    });

app.get("/", (req, res) => {
    res.send("API is working");
});


app.post("/user", async (req, res) => {
    try {
        const user = new user(req.body);
        await user.save();
        res.status(200).json(user);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get("/user", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put("/user/:id", async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedUser) {
            return res.status(400).json({ message: "User not found" });
        };
        res.json(updatedUser);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.delete("/user/:id", async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);

        if (!deletedUser) {
            return res.status(404).json({ message: "user not deleted" });
        };
        res.json({ message: "User deleted Successfully!!" });
    }
    catch(error){
        res.status(404).json({error: error.message});
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server running on ${port}`);
});
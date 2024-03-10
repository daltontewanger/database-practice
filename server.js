const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userController = require("./controllers/users");

const app = express();

// middleware
app.use(express.json())

// Routes
app.use("/users", userController);

// db connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

const PORT = process.env.PORT || 8082;

app.listen(PORT, console.log(`Listening on port ${PORT}`));

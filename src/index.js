const express = require("express");
const cors = require("cors");
const {
    routes: userRoutes
} = require("./user/routes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/user", userRoutes);

module.exports = app;
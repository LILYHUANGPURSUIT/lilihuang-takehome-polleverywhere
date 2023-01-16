const cors = require("cors");
const express = require("express");
const rafflesController = require("./controllers/rafflesController");

const app = express();

app.use(cors());

app.use(express.json());
app.use("/api/raffles", rafflesController);

app.get("/", (req, res) => {
    res.json({message: "Server is running ..."})
});

app.get("*", (req, res) => {
    res.status(404).json({message: "Page not found"})
});

module.exports = app;
const express = require("express");

const raffleController = require("./controllers/raffleController");

const app = express();

// app.use("/raffle", raffleController);

app.get("/", (req, res) => {
    res.json({message: "Server is running ..."})
});

app.get("*", () => {
    res.status(404).json({message: "Page not found"})
});

module.exports = app;
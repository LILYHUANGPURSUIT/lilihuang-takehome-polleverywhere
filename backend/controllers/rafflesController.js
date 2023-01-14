const express = require("express");
const raffles = express.Router();

const { getAllRaffles } = require("../queries/raffles");

// get all raffles
raffles.get("/", async (req, res) => {
    try {
        const allRaffles = await getAllRaffles();
    } catch (error) {
        
    }
})
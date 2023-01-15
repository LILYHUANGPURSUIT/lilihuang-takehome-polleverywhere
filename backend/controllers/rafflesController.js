const express = require("express");
const raffles = express.Router();

const { getAllRaffles, createAraffle, getOneRaffle, updateAraffle } = require("../queries/raffles");
const { getAllParticipants, createParticipant } = require("../queries/getAllParticipants");
const { pickArandomWinner } = require("../helper/pickArandomWinner");

// get all raffles 
    // /api/raffles
raffles.get("/", async (req, res) => {
    const allRaffles = await getAllRaffles();

    if(allRaffles[0]) {
        res.json({success: true, result: allRaffles});
    } else {
        res.status(500).json({success: false, error: "server error..."});
    }
    
});

// create a raffle
    // /api/raffles
raffles.post("/", async(req, res) => {
    const raffle = req.body;
    const createdRaffle = await createAraffle(raffle);
    if(createdRaffle.id) {
        res.json({success: true, result: createdRaffle})
    } else {
        res.status(500).json({success: false, error: "Unable to create a raffle"})
    }
})

// get a raffle
    // /api/raffles/:id
raffles.get("/:id", async(req, res) => {
    const { id } = req.params;
    const raffle = await getOneRaffle(id);
    
    if(raffle.id) {
        res.json({ success: true, result: raffle});
    } else {
        res.status(500).json({success: false, error: `server error, no raffle at index ${id}`})
    }
})

// get all participants
    // /api/raffles/:id/participants
raffles.get("/:id/participants", async (req, res) => {
    const { id } = req.params;
    const allPariticipantsOfSpecificRaffle = await getAllParticipants(id);

    if (allPariticipantsOfSpecificRaffle[0]) {
      res.json({ success: true, result: allPariticipantsOfSpecificRaffle });
    } else res.status(500).json({ success: false, error: allPariticipantsOfSpecificRaffle });

  });

// create a participant
    // /api/raffles/:id/participants
raffles.post("/:id/participants", async(req, res) => {

})

// update a raffle
    // /api/raffles/:id/winner
raffles.put("/:id/winner", async (req, res) => {

    const { id } = req.params;
    const raffle = req.body;
    const allPariticipantsOfSpecificRaffle = await getAllParticipants(id);
    const winnerId = pickArandomWinner(allPariticipantsOfSpecificRaffle).id;
    raffle.winner_id = winnerId;
    raffle.date_raffled = DATE.now();
    const winnerUpdated = await updateAraffle(id, raffle);
    
    if(winnerUpdated.winner_id) {
        res.json({success: true, result: winnerUpdated});
    } else {
        res.status().json({success: false, error: winnerUpdated});
    }
})

// get the winner of a raffle
    // /api/raffles/:id/winner
raffles.get("/:id/winner", async (req, res) => {
    const { id } = req.params;
    // match the secret_token?
    // use a function to get the match one
    
})
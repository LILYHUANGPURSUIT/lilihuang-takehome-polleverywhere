const express = require("express");
const raffles = express.Router();

const { getAllRaffles, createAraffle, getOneRaffle, updateAraffle, deleteRaffle } = require("../queries/raffles");
const { getAllParticipants, getOneParticipant, createAparticipant } = require("../queries/participants");
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

// create a participant at raffle_id
    // /api/raffles/:id/participants
raffles.post("/:id/participants", async(req, res) => {
    const { id } = req.params;
    const participant = req.body;
    const createdParticipant = createAparticipant(id, participant);
    if(createdParticipant.id) {
        res.json({success: true, result: createdParticipant})
    } else {
        res.status(500).json({success: false, error: createdParticipant})
    }
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
        res.status(500).json({success: false, error: winnerUpdated});
    }
})

// get the winner of a raffle
    // /api/raffles/:id/winner
raffles.get("/:id/winner", async (req, res) => {
    const { id } = req.params;
    // use the raffle id to the specific raffle
    const raffle = getOneRaffle(id);
    
    if(raffle.winner_id) {
        // use the winner_id to get participant id
        const winner = getOneParticipant(raffle.winner_id)
        res.json({success: true, result: winner});
    } else {
        res.status(500).json({success: false, error: winner});
    }
    
});

// delete a raffle 
raffles.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedRaffle = await deleteRaffle(id);
    if (deletedRaffle.id) {
      res.json({ success: true, result: deletedRaffle });
    } else
      res.status(500).json({
        success: false,
        error: deletedRaffle,
      });
  });

module.exports = raffles;
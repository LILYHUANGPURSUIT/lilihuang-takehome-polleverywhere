const db = require("../db/dbConfig");

const getAllParticipants  = async(rid) => {
    try {
        const allParticipants = await db.any("SELECT * FROM participants WHERE raffle_id=$1", rid);
        return allParticipants;

    } catch (error) {
        return error;
    }
};

// after I get the winner_id, pick this participant as a winner
const getOneParticipant = async( winner_id ) => {

    try {
        const participant = await db.one("SELECT * FROM participants WHERE id=$1", winner_id);
        return participant;

    } catch (error) {
        return error;
    }
};

const createAparticipant = async(rid, participant) => {
    try {
        const createdParticipant = db.one(
            "INSERT INTO participants(raffle_id, firstname, lastname, email, phone) VALUES($1, $2, $3, $4, $5) RETURNING *",
            [
                rid,
                participant.firstname,
                participant.lastname,
                participant.email,
                participant.phone,
            ]
        );
        return createdParticipant;
        
    } catch (error) {
        return error;
    }
}

module.exports = {
    getAllParticipants,
    getOneParticipant,
    createAparticipant
}
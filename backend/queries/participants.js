const db = require("../db/dbConfig");

const getAllParcitipants  = async(rid) => {
    try {
        const allParticipants = await db.any("SELECT * FROM participants WHERE raffle_id=$1", rid);
        return allParticipants;

    } catch (error) {
        return error;
    }
};

// const 

module.exports = {
    getAllParcitipants,
    createParticipant
}
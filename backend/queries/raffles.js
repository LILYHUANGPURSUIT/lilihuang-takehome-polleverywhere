const db = require("../db/dbConfig.js");

const getAllRaffles = async() => {
    try {
        const allRaffles = await db.any("SELECT * FROM raffles;");
        return allRaffles;

    } catch (error) {
        return error;
    }
};

const createAraffle = async(raffle) => {
    try {
        const createdRaffle = db.one(
            "INSERT INTO raffles(name, secret_token, date_created) VALUES($1, $2, $3) RETURNING *",
            [
                raffle.name,
                raffle.secret_token,
                NOW(),
            ]
        );
        return createdRaffle;
        
    } catch (error) {
        return error;
    }
}

const getOneRaffle = async( rid ) => {
    try {
        const raffle = await db.one("SELECT * FROM raffles WHERE id=$1", rid);
        return raffle;

    } catch (error) {
        return error;
    }
};

const updateAraffle = async (rid, raffle) => {
    try {
        const updatedRaffle = await db.one("UPDATE raffles SET secret_token=$1, date_raffled=$2, winner_id=$3 WHERE id=$4 RETURNING *", 
            [
                raffle.secret_token,
                raffle.date_raffled,
                raffle.winner_id,
                rid
            ]
        );
        return updatedRaffle;

    } catch (error) {
        return error;
    }
}

module.exports = {
    getAllRaffles,
    createAraffle,
    getOneRaffle,
    updateAraffle
}
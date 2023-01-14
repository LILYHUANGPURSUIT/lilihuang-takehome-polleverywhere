const db = require("../db/dbConfig.js");

const getAllRaffles = async() => {
    try {
        const allRaffles = await db.any("SELECT * FROM raffles;");
        return allRaffles;

    } catch (error) {
        return error;
    }
};

module.exports = {
    getAllRaffles,
}
function pickArandomWinner (participants) {
    const randomNum = Math.ceil(Math.random() * participants.length);
    return participants[randomNum];
}

module.exports = { pickArandomWinner };
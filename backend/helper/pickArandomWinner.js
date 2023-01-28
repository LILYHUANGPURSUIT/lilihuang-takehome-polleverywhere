function pickArandomWinner (participants) {
    if(!participants.length) return;

    const randomNum = Math.floor(Math.random() * participants.length)+1;
  
    return participants[randomNum];
}

module.exports = { pickArandomWinner };

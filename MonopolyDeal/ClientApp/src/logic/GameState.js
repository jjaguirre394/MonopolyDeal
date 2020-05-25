class GameState {
    constructor(currentUsers, deck, userTurn){
        this.currentUsers = currentUsers;
        this.deck = deck;
        this.userTurn = userTurn;
    }
}

export default GameState;
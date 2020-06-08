class GameState {
    constructor(currentUsers, deck, userTurn) {
        this.currentUsers = currentUsers;
        this.deck = deck;
        this.userTurn = userTurn;
    }

    isMyTurn = (userName) => {
        return userName == this.userTurn.name;
    }

    getUser = (userName) => {
        return this.currentUsers.find((currentUser) => {
            return currentUser.name == userName;
        });
    }
}

export default GameState;
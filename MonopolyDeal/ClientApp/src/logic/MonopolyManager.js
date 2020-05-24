import User from './User';
import { produceDeck } from './Cards/CardUtilities';

class MonopolyManager {
    constructor() {
        this.currentUsers = [];
        this.deck = [];
    }

    initializeGame = (users) => {
        //Initialize users
        this.currentUsers = users.map(x => new User(x));

        //Initialize Deck
        this.deck = produceDeck();
    }
}

export default MonopolyManager;
import User from './User'
import { produceActionCards } from './Cards'

class MonopolyManager {
    constructor(){
        this.currentUsers = [];
        this.deck = [];
    }

    initializeGame = (users) => {
        //Initialize users
        this.currentUsers = users.map(x => new User(x));

        //Initialize Deck
        this.deck = produceActionCards();
    }

    initializeDeck = () => {

    }
}

export default MonopolyManager;
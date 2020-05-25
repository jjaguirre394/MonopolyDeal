import User from './User';
import { produceDeck, plainObjectToCardObject } from './Cards/CardUtilities';
import GameState from './GameState';

class MonopolyManager {
    constructor() {
        var currentUsers = [];
        var deck = [];
        var userTurn = {};
        this.gameState = new GameState(currentUsers, deck, userTurn)
    }

    initializeGame = (users) => {
        //Initialize users
        this.gameState.currentUsers = users.map(name => new User(name));

        //Initialize Deck
        this.gameState.deck = produceDeck();

        //Hand cards out to players
        this.distributeCards();

        //Choose first player at random
        this.gameState.userTurn = this.gameState.currentUsers[Math.floor(Math.random() * this.gameState.currentUsers.length)]

        return this.getState();
    }

    distributeCards = () => {
        this.gameState.currentUsers.forEach(user => {
            user.takeCardsFromDeck(this.gameState.deck, 5)
        });
    }

    getState = () => {
        return this.gameState;
    }

    getHand = (user) => {
        if(this.gameState.currentUsers)
        {
            let foundUser = this.gameState.currentUsers.find((currentUser) =>{
                return currentUser.name == user;
            });

            let hand = (foundUser ? foundUser.hand : [])

            return hand;
        }
        return [];
    }

    updateState = (newState) => {
        let newStateObject = new GameState(newState.currentUsers, newState.deck, newState.userTurn);
        newStateObject.currentUsers = newStateObject.currentUsers.map(el => new User(el.name, el.hand.map(card => plainObjectToCardObject(card)), el.bank, el.property.map(card => plainObjectToCardObject(card))));
        newStateObject.deck = newStateObject.deck.map(card => plainObjectToCardObject(card));
        newStateObject.userTurn = new User(newStateObject.userTurn.name, newStateObject.userTurn.hand.map(card => plainObjectToCardObject(card)), newStateObject.userTurn.bank, newStateObject.userTurn.property.map(card => plainObjectToCardObject(card)));
        this.gameState = newState;
    }
}

export default MonopolyManager;
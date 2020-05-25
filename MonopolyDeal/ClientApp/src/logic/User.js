class User {
    constructor(name, hand = [], bank = 0, property = []) {
        this.name = name;
        this.hand = hand;
        this.bank = bank;
        this.property = property;
    };

    takeCardsFromDeck = (deck, amount) => {
        for (let index = 0; index < amount; index++) {
            this.hand.push(deck.shift());
        }
    }
}

export default User;
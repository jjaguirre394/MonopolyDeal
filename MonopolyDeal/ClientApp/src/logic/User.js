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

    sellToBank = (card) => {
        if(card.value > 0) {
            // Add value to bank, and remove card from hand.
            this.bank += card.value;
            var indexToRemove = this.hand.findIndex(handCard => handCard.kind == card.kind && handCard.value == card.value);
            if(indexToRemove < 0)
            {
                throw "Could not find card to sell in hand!";
            }
            this.hand.splice(indexToRemove, 1);
        }
        else {
            throw "Cannot sell card with no value to Bank.";
        }
    }
}

export default User;
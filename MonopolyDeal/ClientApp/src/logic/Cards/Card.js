export class Card {
    constructor(value, type = null, cardType = "Card") {
        this.type = type;
        this.value = value;
        this.cardType = cardType
    }
}

export default Card;
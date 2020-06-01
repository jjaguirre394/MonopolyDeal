import React from 'react';

export class Card {
    constructor(value, type = null, cardType = "Card") {
        this.type = type;
        this.value = value;
        this.cardType = cardType
    };

    getCardElements() {
        var elements = [
            <div>
                <p>Card: {this.type}</p>
                <p>Type: {this.cardType}</p>
                <p>Card Value: {this.value}</p>
            </div>
        ];

        return elements;
    };
};

export default Card;
import React from 'react';
import { Button } from 'reactstrap';

export class Card {
    constructor(value, type = null, cardType = "Card") {
        this.type = type;
        this.value = value;
        this.cardType = cardType
    };

    getCardElements(isDisabled = true) {
        var bankButton = <Button disabled={isDisabled}>Add To Bank</Button>;
        var elements = [
            <div>
                <p>Card: {this.type}</p>
                <p>Type: {this.cardType}</p>
                <p>Card Value: {this.value}</p>
                {(this.value > 0) ? bankButton : null}
            </div>
        ];

        return elements;
    };
};

export default Card;
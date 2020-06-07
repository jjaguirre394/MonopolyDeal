import { Card } from './Card';
import { CombinationColors, CombinationTypes } from './CardConstants';
import React from 'react';
import { Button } from 'reactstrap';

class RentCard extends Card {
    constructor(type) {
        var value = 0;
        switch (type) {
            case CombinationTypes.blueGreen:
                value = 1;
                break;
            case CombinationTypes.lightBlueBrown:
                value = 1;
                break;
            case CombinationTypes.all:
                value = 3;
                break;
            case CombinationTypes.orangePurple:
                value = 1;
                break;
            case CombinationTypes.utilitiesBlack:
                value = 1;
                break;
            case CombinationTypes.yellowRed:
                value = 1;
                break;
            default:
                break;
        }
        super(value, type, "RentCard");
        this.combos = CombinationColors[type];
    };

    getCardElements(isDisabled = true) {
        var elements = super.getCardElements(isDisabled);
        elements.push(
        <div>
            <p>Combos: {this.combos}</p>
            <Button disabled={isDisabled}>Collect Rent</Button>
        </div>);

        return elements;
    };
};

export default RentCard;
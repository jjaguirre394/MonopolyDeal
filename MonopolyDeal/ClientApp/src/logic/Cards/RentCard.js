import { Card } from './Card';
import { CombinationColors, CombinationKinds } from './CardConstants';
import React from 'react';
import { Button } from 'reactstrap';

class RentCard extends Card {
    constructor(kind) {
        var value = 0;
        switch (kind) {
            case CombinationKinds.blueGreen:
                value = 1;
                break;
            case CombinationKinds.lightBlueBrown:
                value = 1;
                break;
            case CombinationKinds.all:
                value = 3;
                break;
            case CombinationKinds.orangePurple:
                value = 1;
                break;
            case CombinationKinds.utilitiesBlack:
                value = 1;
                break;
            case CombinationKinds.yellowRed:
                value = 1;
                break;
            default:
                break;
        }
        super(value, kind, "RentCard");
        this.combos = CombinationColors[kind];
    };

    getCardElements(isDisabled = true, onclickHandler) {
        var elements = super.getCardElements(isDisabled, onclickHandler);
        elements.push(
        <div>
            <p>Combos: {this.combos}</p>
            <Button disabled={isDisabled}>Collect Rent</Button>
        </div>);

        return elements;
    };
};

export default RentCard;
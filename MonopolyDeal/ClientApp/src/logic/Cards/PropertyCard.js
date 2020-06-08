import { Card } from './Card';
import { Colors, Rent } from './CardConstants';
import React from 'react';
import { Button } from 'reactstrap';

class PropertyCard extends Card {
    constructor(kind, propertyName = null) {
        var value = 0;
        switch (kind) {
            case Colors.brown:
                value = 1;
                break;
            case Colors.blue:
                value = 4;
                break;
            case Colors.green:
                value = 4;
                break;
            case Colors.lightBlue:
                value = 1;
                break;
            case Colors.orange:
                value = 2;
                break;
            case Colors.purple:
                value = 2;
                break;
            case Colors.black:
                value = 2;
                break;
            case Colors.red:
                value = 3;
                break;
            case Colors.utilities:
                value = 2;
                break;
            case Colors.yellow:
                value = 3;
            default:
                break;
        }
        super(value, kind, "PropertyCard");
        this.propertyName = propertyName;
        this.rent = Rent[kind];
    }

    getCardElements(isDisabled = true, onclickHandler) {
        var elements = super.getCardElements(isDisabled, onclickHandler);
        elements.push(
        <div>
            <p>Propert Name: {this.propertyName}</p>
            <p>Rent: {this.rent}</p>
            <Button disabled={isDisabled}>Play Property</Button>
        </div>);

        return elements;
    };
};

export default PropertyCard;
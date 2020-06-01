import { Card } from './Card';
import { Colors, Rent } from './CardConstants';
import React from 'react';

class PropertyCard extends Card {
    constructor(type, propertyName = null) {
        var value = 0;
        switch (type) {
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
        super(value, type, "PropertyCard");
        this.propertyName = propertyName;
        this.rent = Rent[type];
    }

    getCardElements() {
        var elements = super.getCardElements();
        elements.push(<div>
            <p>Propert Name: {this.propertyName}</p>
            <p>Rent: {this.rent}</p>
        </div>);

        return elements;
    };
};

export default PropertyCard;
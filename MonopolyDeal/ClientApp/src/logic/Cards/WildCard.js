import { CombinationTypes } from "./CardConstants";
import PropertyCard from "./PropertyCard";
import { Colors } from "./CardConstants";
import { Card } from "./Card";
import React from 'react';
import { Button } from 'reactstrap';

class WildCard extends Card {
    constructor(type) {
        let combos = null;
        var value = 0;
        var wildCardName = "wild_card";
        //Value based on combos
        switch (type) {
            case CombinationTypes.blueGreen:
                value = 4;
                combos = { blue: new PropertyCard(Colors.blue, wildCardName), green: new PropertyCard(Colors.green, wildCardName) };
                break;
            case CombinationTypes.lightBlueBrown:
                value = 1;
                combos = { lightBlue: new PropertyCard(Colors.lightBlue, wildCardName), brown: new PropertyCard(Colors.brown, wildCardName) };
                break;
            case CombinationTypes.all:
                break;
            case CombinationTypes.orangePurple:
                value = 2;
                combos = { orange: new PropertyCard(Colors.orange, wildCardName), purple: new PropertyCard(Colors.purple, wildCardName) };
                break;
            case CombinationTypes.greenBlack:
                value = 4;
                combos = { green: new PropertyCard(Colors.green, wildCardName), black: new PropertyCard(Colors.black, wildCardName) };
                break;
            case CombinationTypes.lightBlueBlack:
                value = 4;
                combos = { lightBlue: new PropertyCard(Colors.lightBlue, wildCardName), black: new PropertyCard(Colors.black, wildCardName) };
                break;
            case CombinationTypes.utilitiesBlack:
                value = 2;
                combos = { utilities: new PropertyCard(Colors.utilities, wildCardName), black: new PropertyCard(Colors.black, wildCardName) };
                break;
            case CombinationTypes.yellowRed:
                value = 3;
                combos = { yellow: new PropertyCard(Colors.yellow, wildCardName), red: new PropertyCard(Colors.red, wildCardName) };
                break;
            default:
                break;
        }
        super(value, type, "WildCard");
        this.combos = combos;
    };

    getCardElements() {
        var elements = super.getCardElements();
        if (this.combos) {
            elements.push(<div>
                <p>Combos: {Object.keys(this.combos)}</p>
                <Button>Play WildCard</Button>
            </div>);
        }

        return elements;
    };
};

export default WildCard;
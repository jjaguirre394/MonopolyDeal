import { CombinationKinds } from "./CardConstants";
import PropertyCard from "./PropertyCard";
import { Colors } from "./CardConstants";
import { Card } from "./Card";
import React from 'react';
import { Button } from 'reactstrap';

class WildCard extends Card {
    constructor(kind) {
        let combos = null;
        var value = 0;
        var wildCardName = "wild_card";
        //Value based on combos
        switch (kind) {
            case CombinationKinds.blueGreen:
                value = 4;
                combos = { blue: new PropertyCard(Colors.blue, wildCardName), green: new PropertyCard(Colors.green, wildCardName) };
                break;
            case CombinationKinds.lightBlueBrown:
                value = 1;
                combos = { lightBlue: new PropertyCard(Colors.lightBlue, wildCardName), brown: new PropertyCard(Colors.brown, wildCardName) };
                break;
            case CombinationKinds.all:
                break;
            case CombinationKinds.orangePurple:
                value = 2;
                combos = { orange: new PropertyCard(Colors.orange, wildCardName), purple: new PropertyCard(Colors.purple, wildCardName) };
                break;
            case CombinationKinds.greenBlack:
                value = 4;
                combos = { green: new PropertyCard(Colors.green, wildCardName), black: new PropertyCard(Colors.black, wildCardName) };
                break;
            case CombinationKinds.lightBlueBlack:
                value = 4;
                combos = { lightBlue: new PropertyCard(Colors.lightBlue, wildCardName), black: new PropertyCard(Colors.black, wildCardName) };
                break;
            case CombinationKinds.utilitiesBlack:
                value = 2;
                combos = { utilities: new PropertyCard(Colors.utilities, wildCardName), black: new PropertyCard(Colors.black, wildCardName) };
                break;
            case CombinationKinds.yellowRed:
                value = 3;
                combos = { yellow: new PropertyCard(Colors.yellow, wildCardName), red: new PropertyCard(Colors.red, wildCardName) };
                break;
            default:
                break;
        }
        super(value, kind, "WildCard");
        this.combos = combos;
    };

    getCardElements(isDisabled = true) {
        var elements = super.getCardElements(isDisabled);
        if (this.combos) {
            elements.push(<div>
                <p>Combos: {Object.keys(this.combos)}</p>
                <Button disabled={isDisabled}>Play WildCard</Button>
            </div>);
        }

        return elements;
    };
};

export default WildCard;
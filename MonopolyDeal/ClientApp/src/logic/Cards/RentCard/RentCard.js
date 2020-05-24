import { Card } from '../Card';
import { CombinationColors, CombinationTypes } from '../CardConstants';

class RentCard extends Card {
    constructor(type, value) {
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
        super(value, type);
        this.combos = CombinationColors[type];
    }
}

export default RentCard;
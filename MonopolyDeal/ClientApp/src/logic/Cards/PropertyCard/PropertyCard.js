import { Card } from '../Card';
import { Colors, Rent } from '../CardConstants';

class PropertyCard extends Card {
    constructor(type, propertyName) {
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
        super(value, type);
        this.propertyName = propertyName;
        this.rent = Rent[type];
    }
}

export default PropertyCard;
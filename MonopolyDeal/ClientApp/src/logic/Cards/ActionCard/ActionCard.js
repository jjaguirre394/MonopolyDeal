import { Card } from '../Card';
import { ActionTypes } from '../CardConstants';

class ActionCard extends Card {
    constructor(type) {
        var value = 0;
        switch (type) {
            case ActionTypes.dealBreaker:
                value = 5;
                break;
            case ActionTypes.debtCollector:
                value = 3;
                break;
            case ActionTypes.doubleTheRent:
                value = 1;
                break;
            case ActionTypes.forcedDeal:
                value = 3;
                break;
            case ActionTypes.hotel:
                value = 3;
                break;
            case ActionTypes.house:
                value = 3;
                break;
            case ActionTypes.itsMyBirthday:
                value = 2;
                break;
            case ActionTypes.justSayNo:
                value = 4;
                break;
            case ActionTypes.passGo:
                value = 1;
                break;
            case ActionTypes.slyDeal:
                value = 3;
                break;
            default:
                break;
        }
        super(value, type);
    }
}

export default ActionCard;
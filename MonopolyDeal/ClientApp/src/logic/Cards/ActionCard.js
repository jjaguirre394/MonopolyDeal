import { Card } from './Card';
import { ActionKinds } from './CardConstants';
import React from 'react';
import { Button } from 'reactstrap';

class ActionCard extends Card {
    constructor(kind) {
        var value = 0;
        switch (kind) {
            case ActionKinds.dealBreaker:
                value = 5;
                break;
            case ActionKinds.debtCollector:
                value = 3;
                break;
            case ActionKinds.doubleTheRent:
                value = 1;
                break;
            case ActionKinds.forcedDeal:
                value = 3;
                break;
            case ActionKinds.hotel:
                value = 3;
                break;
            case ActionKinds.house:
                value = 3;
                break;
            case ActionKinds.itsMyBirthday:
                value = 2;
                break;
            case ActionKinds.justSayNo:
                value = 4;
                break;
            case ActionKinds.passGo:
                value = 1;
                break;
            case ActionKinds.slyDeal:
                value = 3;
                break;
            default:
                break;
        }
        super(value, kind, "ActionCard");
    };

    getCardElements(isDisabled = true, onclickHandler) {
        var elements = super.getCardElements(isDisabled, onclickHandler);
        var actionButton = <Button disabled={isDisabled}>Play Action</Button>;

        elements.push(actionButton);

        return elements;
    };
};

export default ActionCard;
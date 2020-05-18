import { CardTypes } from './CardConstants'
export class Card{
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }
}

export class ActionCard extends Card{
    constructor(type) {
        var value = 0;
        switch (type) {
            case CardTypes.dealBreaker:
                value = 5;
                break;
            case CardTypes.debtCollector:
                value = 3;
                break;
            case CardTypes.doubleTheRent:
                value = 1;
                break;
            case CardTypes.forcedDeal:
                value = 3;
                break;
            case CardTypes.hotel:
                value = 3;
                break;
            case CardTypes.house:
                value = 3;
                break;
            case CardTypes.itsMyBirthday:
                value = 2;
                break;
            case CardTypes.justSayNo:
                value = 4;
                break;
            case CardTypes.passGo:
                value = 1;
                break;
            case CardTypes.slyDeal:
                value = 3;
                break;
            default:
                break;
        }
        super(type, value);
    }
}

export class PropertyCard extends Card{
    constructor(type, value) {
        super(type, value);
    }
}

export class WildCard extends Card{
    constructor(type, value) {
        super(type, value);
    }
}

export class RentCard extends Card{
    constructor(type, value) {
        super(type, value);
    }
}

export class MoneyCard extends Card{
    constructor(type, value) {
        super(type, value);
    }
}

const produceDeck = () =>{
    return produceActionCards()

};

export const produceActionCards = () => {
    // 34 Action Cards:
    // 2 Deal Breakers
    let actionCards = getCards(ActionCard, CardTypes.dealBreaker, 2);
    // 3 Just Say No
    actionCards.concat(getCards(ActionCard, CardTypes.justSayNo, 3));
    // 3 Sly Deal
    actionCards.concat(getCards(ActionCard, CardTypes.slyDeal, 3));
    // 4 Force Deal
    actionCards.concat(getCards(ActionCard, CardTypes.forcedDeal, 4));
    // 3 Debt Collector
    actionCards.concat(getCards(ActionCard, CardTypes.debtCollector, 3));
    // 3 It's my Birthday
    actionCards.concat(getCards(ActionCard, CardTypes.itsMyBirthday, 3));
    // 10 Pass Go
    actionCards.concat(getCards(ActionCard, CardTypes.passGo, 10));
    // 3 House
    actionCards.concat(getCards(ActionCard, CardTypes.house, 3));
    // 3 Hotel
    actionCards.concat(getCards(ActionCard, CardTypes.hotel, 3));
    // 2 Double Rent
    actionCards.concat(getCards(ActionCard, CardTypes.doubleTheRent, 2));

    return actionCards;
}

const getCards = (type, subtype, amount) => {
    const args = [subtype]
    const cards = [];
    for (let index = 0; index < amount; index++) {
        cards.push(Reflect.construct(type, args))
    }
    return cards;
}


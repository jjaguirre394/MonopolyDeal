import { ActionKinds, Colors, PropertyNames, CombinationKinds, CardTypes } from './CardConstants';
import ActionCard from './ActionCard';
import PropertyCard from './PropertyCard';
import WildCard from './WildCard';
import RentCard from './RentCard';
import MoneyCard from './MoneyCard';

export const produceDeck = () => {
    let cards = produceActionCards();
    cards = cards.concat(producePropertyCards());
    cards = cards.concat(produceWildCards());
    cards = cards.concat(produceRentCards());
    cards = cards.concat(produceMoneyCards());

    return shuffle(cards);
};

const shuffle = (cards) => {
    var j, x, i;
    for (i = cards.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = cards[i];
        cards[i] = cards[j];
        cards[j] = x;
    }
    return cards;
}

const produceRentCards = () => {
    let rentCards = getRentCards(CombinationKinds.all, 3);
    rentCards = rentCards.concat(getRentCards(CombinationKinds.blueGreen, 2));
    rentCards = rentCards.concat(getRentCards(CombinationKinds.lightBlueBrown, 2));
    rentCards = rentCards.concat(getRentCards(CombinationKinds.orangePurple, 2));
    rentCards = rentCards.concat(getRentCards(CombinationKinds.utilitiesBlack, 2));
    rentCards = rentCards.concat(getRentCards(CombinationKinds.yellowRed, 2));

    return rentCards;
}

const produceActionCards = () => {
    // 34 Action Cards
    // 2 Deal Breakers
    let actionCards = getActionCards(ActionKinds.dealBreaker, 2);
    // 3 Just Say No
    actionCards = actionCards.concat(getActionCards(ActionKinds.justSayNo, 3));
    // 3 Sly Deal
    actionCards = actionCards.concat(getActionCards(ActionKinds.slyDeal, 3));
    // 4 Force Deal
    actionCards = actionCards.concat(getActionCards(ActionKinds.forcedDeal, 3));
    // 3 Debt Collector
    actionCards = actionCards.concat(getActionCards(ActionKinds.debtCollector, 3));
    // 3 It's my Birthday
    actionCards = actionCards.concat(getActionCards(ActionKinds.itsMyBirthday, 3));
    // 10 Pass Go
    actionCards = actionCards.concat(getActionCards(ActionKinds.passGo, 10));
    // 3 House
    actionCards = actionCards.concat(getActionCards(ActionKinds.house, 3));
    // 3 Hotel
    actionCards = actionCards.concat(getActionCards(ActionKinds.hotel, 2));
    // 2 Double Rent
    actionCards = actionCards.concat(getActionCards(ActionKinds.doubleTheRent, 2));

    return actionCards;
}

const producePropertyCards = () => {
    // 28 property cards
    let propertyCards = getPropertyCards(Colors.brown, PropertyNames.brown);
    propertyCards = propertyCards.concat(getPropertyCards(Colors.blue, PropertyNames.blue));
    propertyCards = propertyCards.concat(getPropertyCards(Colors.green, PropertyNames.green));
    propertyCards = propertyCards.concat(getPropertyCards(Colors.lightBlue, PropertyNames.lightBlue));
    propertyCards = propertyCards.concat(getPropertyCards(Colors.orange, PropertyNames.orange));
    propertyCards = propertyCards.concat(getPropertyCards(Colors.purple, PropertyNames.purple));
    propertyCards = propertyCards.concat(getPropertyCards(Colors.black, PropertyNames.black));
    propertyCards = propertyCards.concat(getPropertyCards(Colors.red, PropertyNames.red))
    propertyCards = propertyCards.concat(getPropertyCards(Colors.utilities, PropertyNames.utilities));
    propertyCards = propertyCards.concat(getPropertyCards(Colors.yellow, PropertyNames.yellow));

    return propertyCards;
}

const produceWildCards = () => {
    let wildCards = getWildCards(CombinationKinds.blueGreen, 1);
    wildCards = wildCards.concat(getWildCards(CombinationKinds.lightBlueBrown, 1));
    wildCards = wildCards.concat(getWildCards(CombinationKinds.all, 2));
    wildCards = wildCards.concat(getWildCards(CombinationKinds.orangePurple, 2));
    wildCards = wildCards.concat(getWildCards(CombinationKinds.greenBlack, 1));
    wildCards = wildCards.concat(getWildCards(CombinationKinds.lightBlueBlack, 1));
    wildCards = wildCards.concat(getWildCards(CombinationKinds.utilitiesBlack, 1));
    wildCards = wildCards.concat(getWildCards(CombinationKinds.yellowRed, 2));

    return wildCards;
}

const produceMoneyCards = () => {
    let moneyCards = getMoneyCards(10, 1);
    moneyCards = moneyCards.concat(getMoneyCards(1, 6));
    moneyCards = moneyCards.concat(getMoneyCards(2, 5));
    moneyCards = moneyCards.concat(getMoneyCards(3, 3));
    moneyCards = moneyCards.concat(getMoneyCards(4, 3));
    moneyCards = moneyCards.concat(getMoneyCards(5, 2));

    return moneyCards;
}

const getPropertyCards = (kind, propertyNames) => {
    const cards = [];
    propertyNames.forEach(name => {
        cards.push(new PropertyCard(kind, name));
    });

    return cards;
}

const getWildCards = (kind, amount) => {
    const cards = [];
    for (let index = 0; index < amount; index++) {
        cards.push(new WildCard(kind))
    }
    return cards;
}

const getRentCards = (kind, amount) => {
    const cards = [];
    for (let index = 0; index < amount; index++) {
        cards.push(new RentCard(kind))
    }
    return cards;
}

const getMoneyCards = (value, amount) => {
    const cards = [];
    for (let index = 0; index < amount; index++) {
        cards.push(new MoneyCard(value))
    }
    return cards;
}

const getActionCards = (kind, amount) => {
    const cards = [];
    for (let index = 0; index < amount; index++) {
        cards.push(new ActionCard(kind))
    }

    return cards;
}

export const plainObjectToCardObject = (plainObject) => {
    switch (plainObject.cardType) {
        case "ActionCard":
            return new ActionCard(plainObject.kind);
        case "MoneyCard":
            return new MoneyCard(plainObject.value);
        case "PropertyCard":
            return new PropertyCard(plainObject.kind, plainObject.propertyName);
        case "RentCard":
            return new RentCard(plainObject.kind);
        case "WildCard":
            return new WildCard(plainObject.kind);
        default:
            break;
    }
}
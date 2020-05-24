import { ActionTypes, Colors, PropertyNames, CombinationTypes } from './CardConstants';
import ActionCard from './ActionCard/ActionCard';
import PropertyCard from './PropertyCard/PropertyCard';
import WildCard from './WildCard/WildCard';
import RentCard from './RentCard/RentCard';
import MoneyCard from './MoneyCard/MoneyCard';

export const produceDeck = () =>{
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
    let rentCards = getRentCards(CombinationTypes.all, 3);
    rentCards = rentCards.concat(getRentCards(CombinationTypes.blueGreen, 2));
    rentCards = rentCards.concat(getRentCards(CombinationTypes.lightBlueBrown, 2));
    rentCards = rentCards.concat(getRentCards(CombinationTypes.orangePurple, 2));
    rentCards = rentCards.concat(getRentCards(CombinationTypes.utilitiesBlack, 2));
    rentCards = rentCards.concat(getRentCards(CombinationTypes.yellowRed, 2));

    return rentCards;
}

const produceActionCards = () => {
    // 34 Action Cards
    // 2 Deal Breakers
    let actionCards = getActionCards(ActionTypes.dealBreaker, 2);
    // 3 Just Say No
    actionCards = actionCards.concat(getActionCards(ActionTypes.justSayNo, 3));
    // 3 Sly Deal
    actionCards = actionCards.concat(getActionCards(ActionTypes.slyDeal, 3));
    // 4 Force Deal
    actionCards = actionCards.concat(getActionCards(ActionTypes.forcedDeal, 3));
    // 3 Debt Collector
    actionCards = actionCards.concat(getActionCards(ActionTypes.debtCollector, 3));
    // 3 It's my Birthday
    actionCards = actionCards.concat(getActionCards(ActionTypes.itsMyBirthday, 3));
    // 10 Pass Go
    actionCards = actionCards.concat(getActionCards(ActionTypes.passGo, 10));
    // 3 House
    actionCards = actionCards.concat(getActionCards(ActionTypes.house, 3));
    // 3 Hotel
    actionCards = actionCards.concat(getActionCards(ActionTypes.hotel, 2));
    // 2 Double Rent
    actionCards = actionCards.concat(getActionCards(ActionTypes.doubleTheRent, 2));

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
    let wildCards = getWildCards(CombinationTypes.blueGreen, 1);
    wildCards = wildCards.concat(getWildCards(CombinationTypes.lightBlueBrown, 1));
    wildCards = wildCards.concat(getWildCards(CombinationTypes.all, 2));
    wildCards = wildCards.concat(getWildCards(CombinationTypes.orangePurple, 2));
    wildCards = wildCards.concat(getWildCards(CombinationTypes.greenBlack, 1));
    wildCards = wildCards.concat(getWildCards(CombinationTypes.lightBlueBlack, 1));
    wildCards = wildCards.concat(getWildCards(CombinationTypes.utilitiesBlack, 1));
    wildCards = wildCards.concat(getWildCards(CombinationTypes.yellowRed, 2));

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

const getPropertyCards = (type, propertyNames) => {
    const cards = [];
    propertyNames.forEach(name => {
        cards.push(new PropertyCard(type, name));
    });

    return cards;
}

const getWildCards = (type, amount) => {
    const cards = [];
    for (let index = 0; index < amount; index++) {
        cards.push(new WildCard(type))
    }
    return cards;
}

const getRentCards = (type, amount) => {
    const cards = [];
    for (let index = 0; index < amount; index++) {
        cards.push(new RentCard(type))
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

const getActionCards = (type, amount) => {
    const cards = [];
    for (let index = 0; index < amount; index++) {
        cards.push(new ActionCard(type))
    }

    return cards;
}
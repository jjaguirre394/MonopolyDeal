import { Card } from './Card';

class MoneyCard extends Card {
    constructor(value) {
        super(value, "Money", "MoneyCard");
    };

    getCardElements(isDisabled = true) {
        var elements = super.getCardElements(isDisabled);

        return elements;
    };
};

export default MoneyCard;
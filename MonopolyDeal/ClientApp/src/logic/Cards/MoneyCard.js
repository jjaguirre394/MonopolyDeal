import { Card } from './Card';

class MoneyCard extends Card {
    constructor(value) {
        super(value, "Money", "MoneyCard");
    };

    getCardElements() {
        var elements = super.getCardElements();

        return elements;
    };
};

export default MoneyCard;
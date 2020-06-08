import { Card } from './Card';

class MoneyCard extends Card {
    constructor(value) {
        super(value, "Money", "MoneyCard");
    };

    getCardElements(isDisabled = true, onclickHandler) {
        var elements = super.getCardElements(isDisabled, onclickHandler);

        return elements;
    };
};

export default MoneyCard;
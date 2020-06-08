import MonopolyManager from './MonopolyManager';

class MonopolyController {
    constructor() {
        this.monopolyManager = new MonopolyManager();
    }

    start(users) {
        // Initialize Game
        return this.monopolyManager.initializeGame(users);
    }

    updateState(newState) {
        return this.monopolyManager.updateState(newState);
    }

    getHand(user) {
        return this.monopolyManager.getHand(user);
    }

    getState() {
        return this.monopolyManager.getState();
    }
}

export default MonopolyController;
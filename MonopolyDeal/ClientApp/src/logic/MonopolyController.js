import MonopolyManager from './MonopolyManager'

class MonopolyController {
    constructor() {
        this.monopolyManager = new MonopolyManager();
    }

    start(users) {
        this.monopolyManager.initializeGame(users);
    }
}

export default MonopolyController;
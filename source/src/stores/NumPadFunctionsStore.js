import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class NumPadFunctionsStore extends EventEmitter {
    constructor() {
        super()
        this.menuItems = [];
    }

    pressOne() {
        {/** TODO | Implement the logic to add number to the clip board/text area */ }
        this.emit("change");
    }

    pressTwo() {
        {/** TODO | Implement the logic to add number to the clip board/text area */ }
        this.emit("change");
    }

    pressThree() {
        {/** TODO | Implement the logic to add number to the clip board/text area */ }
        this.emit("change");
    }

    pressFour() {
        {/** TODO | Implement the logic to add number to the clip board/text area */ }
        this.emit("change");
    }

    pressFive() {
        {/** TODO | Implement the logic to add number to the clip board/text area */ }
        this.emit("change");
    }

    pressSix() {
        {/** TODO | Implement the logic to add number to the clip board/text area */ }
        this.emit("change");
    }

    pressSeven() {
        {/** TODO | Implement the logic to add number to the clip board/text area */ }
        this.emit("change");
    }

    pressEight() {
        {/** TODO | Implement the logic to add number to the clip board/text area */ }
        this.emit("change");
    }

    pressNine() {
        {/** TODO | Implement the logic to add number to the clip board/text area */ }
        this.emit("change");
    }

    pressZero() {
        {/** TODO | Implement the logic to add number to the clip board/text area */ }
        this.emit("change");
    }

    handleDelete() {
        {/** TODO | Implement the logic to void the selected item or clear text area */ }
        this.emit("change");
    }

    handleQty() {
        {/** TODO | Implement the logic to set the quantity */ }
        this.emit("change");
    }

    handleActions(action) {
        switch (action.type) {
            case "PRESS_ONE": {
                this.pressOne();
                break;
            }
            case "PRESS_TWO": {
                this.pressTwo();
                break;
            }
            case "PRESS_THREE": {
                this.pressThree();
                break;
            }
            case "PRESS_FOUR": {
                this.pressFour();
                break;
            }
            case "PRESS_FIVE": {
                this.pressFive();
                break;
            }
            case "PRESS_SIX": {
                this.pressSix();
                break;
            }
            case "PRESS_SEVEN": {
                this.pressSeven();
                break;
            }
            case "PRESS_EIGHT": {
                this.pressEight();
                break;
            }
            case "PRESS_NINE": {
                this.pressNine();
                break;
            }
            case "PRESS_ZERO": {
                this.pressZero();
                break;
            }
            case "DELETE": {
                this.handleDelete();
                break;
            }
            case "QTY": {
                this.handleQty();
                break;
            }
        }
    }
}

const numPadFunctionsStore = new NumPadFunctionsStore;
dispatcher.register(numPadFunctionsStore.handleActions.bind(numPadFunctionsStore));

export default NumPadFunctionsStore;
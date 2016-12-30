import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class CheckDetailsStore extends EventEmitter {
  constructor() {
    super()
    this.menuItems = [];
  }

  addMenuItem(text, price, qty) {
    const id = Date.now();

    this.menuItems.push({
      id,
      text,
      price,
      qty,
    });

    this.emit("change");
  }

  getAll() {
    return this.menuItems;
  }

  handleActions(action) {
    switch(action.type) {
      case "ADD_MENUITEM": {
        this.addMenuItem(action.text, action.price, action.qty);
        break;
      }
      case "VOID_MENUITEM": {
        this.menuItems = action.menuItems;
        this.emit("change");
        break;
      }
    }
  }

}

const checkDetailsStore = new CheckDetailsStore;
dispatcher.register(checkDetailsStore.handleActions.bind(checkDetailsStore));

export default checkDetailsStore;

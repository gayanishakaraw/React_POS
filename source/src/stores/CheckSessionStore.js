import { EventEmitter } from "events";

import dispatcher from "../dispatcher";
import CheckSession from "../components/CheckSession";

class CheckSessionStore extends EventEmitter {
  constructor() {
    super()
    this.checkSession = CheckSession.;
  }

  addMenuItem(text, price, qty) {
    const id = Date.now();
    var selected = false;

    this.menuItems.push({
      id,
      text,
      price,
      qty,
      selected,
    });

    this.emit("change");
  }

  getAll() {
    return this.menuItems;
  }

  handleActions(action) {
    switch(action.type) {
      case "ADD_MENUITEM": {
        this.addMenuItem(action.id, action.text, action.price, action.qty, action.selected);
        break;
      }
      case "SELECT_MENUITEM": {
        this.menuItems = action.menuItems;
        this.emit("change");
        break;
      }
    }
  }
}

const checkSessionStore = new CheckSessionStore;
dispatcher.register(checkSessionStore.handleActions.bind(checkSessionStore));

export default checkSessionStore;

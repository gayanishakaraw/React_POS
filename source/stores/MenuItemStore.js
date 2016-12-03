import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class MenuItemStore extends EventEmitter {
  constructor() {
    super()
    this.menuItems = [
      {
        id: 113464613,
        text: "Chicken Burger",
        price: "150.00"
      },
      {
        id: 235684679,
        text: "Omelet",
        price: "50.00"
      },
      {
        id: 235684679,
        text: "Pizza",
        price: "1050.00"
      },
      {
        id: 235684679,
        text: "Nachoas",
        price: "2050.00"
      },
    ];
  }

  addMenuItem(text, price) {
    const id = Date.now();

    this.menuItems.push({
      id,
      text,
      price,
    });

    this.emit("change");
  }

  getAll() {
    return this.menuItems;
  }

  handleActions(action) {
    switch(action.type) {
      case "ADD_MENUITEM": {
        this.addMenuItem(action.text, action.price);
        break;
      }
      case "RECEIVE_MENUITEM": {
        this.menuItems = action.menuItems;
        this.emit("change");
        break;
      }
    }
  }

}

const menuItemStore = new MenuItemStore;
dispatcher.register(menuItemStore.handleActions.bind(menuItemStore));

export default menuItemStore;

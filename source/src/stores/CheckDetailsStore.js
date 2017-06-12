import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class CheckDetailsStore extends EventEmitter {
  constructor() {
    super()
    this.menuItems = [];
  }

//
//  isExistingItem(id, items) {
//    for (var i = 0; i < items.length; i++) {
//     if (items[i].id === id) {
//        items[i].qty++;
//        return items[i].id > 0;
//      }
//    }
//  }


  addMenuItem(num, text, price, qty, selected) {
    const id = num;
    var selected = selected;
    var itemExists = false;

    for (var i = 0; i < this.menuItems.length; i++) {
      if (this.menuItems[i].id === id) {
        itemExists = true;
        this.menuItems[i].qty++;
      }
    }

    if (itemExists) {
      // item qty has been incremented 
    }
    else {
      this.menuItems.push({
        id,
        text,
        price,
        qty,
        selected,
      });
    }

    this.emit("change");
  }

  getAll() {
    return this.menuItems;
  }

  handleActions(action) {
    switch (action.type) {
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

const checkDetailsStore = new CheckDetailsStore;
dispatcher.register(checkDetailsStore.handleActions.bind(checkDetailsStore));

export default checkDetailsStore;

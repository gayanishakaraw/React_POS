import dispatcher from "../dispatcher";

export function addMenuItem(text, price) {
  dispatcher.dispatch({
    type: "ADD_MENUITEM",
    text,
    price,
  });
}

export function deleteMenuItem(id) {
  dispatcher.dispatch({
    type: "DELETE_MENUITEM",
    id,
  });
}

export function reloadMenuItems() {
  dispatcher.dispatch({type: "FETCH_MENUITEMS"});
  setTimeout(() => {
    dispatcher.dispatch({type: "RECEIVE_MENUITEM", menuItems: [
      {
        id: 8484848484,
        text: "Cheese Burger",
        price: "120.00"
      },
      {
        id: 6262627272,
        text: "Koththu",
        price: "350.00"
      },
    ]});
  }, 1000);
}
 
import dispatcher from "../dispatcher";

export function voidMenuItem(text, price) {
  dispatcher.dispatch({
    type: "VOID_MENUITEM",
    text,
    price,
  });
}
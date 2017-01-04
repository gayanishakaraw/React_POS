import dispatcher from "../dispatcher";

export function pressOne() {
  dispatcher.dispatch({
    type: "PRESS_ONE",
  });
}
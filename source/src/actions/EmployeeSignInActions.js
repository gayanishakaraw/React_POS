import dispatcher from "../dispatcher";

export function userSignIn(userName) {
  dispatcher.dispatch({
    type: "USER_SIGN_IN",
    userName
  });
}

export function userSignOut(id) {
  dispatcher.dispatch({
    type: "USER_SIGN_OUT"
  });
}

 
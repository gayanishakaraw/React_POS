import AppDispatcher from '../dispatcher.js';
import {LOGIN_USER, LOGOUT_USER} from '../constants/LoginConstants.js';
import RouterContainer from '../services/RouterContainer'

export default {
  loginUser: (jwt) => {
    var savedJwt = localStorage.getItem('jwt');
    
    AppDispatcher.dispatch({
      actionType: LOGIN_USER,
      jwt: jwt
    });
    
    if (savedJwt !== jwt) {
      var nextPath = RouterContainer.get().getCurrentQuery().nextPath || '/';

      RouterContainer.get().transitionTo(nextPath);
      localStorage.setItem('jwt', jwt);
    }
  },
  logoutUser: () => {
    RouterContainer.get().transitionTo('/login');
    localStorage.removeItem('jwt');
    AppDispatcher.dispatch({
      actionType: LOGOUT_USER
    });
  }
}


/**import dispatcher from "../dispatcher";

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
}*/

 
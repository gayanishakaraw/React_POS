import {LOGIN_USER, LOGOUT_USER} from '../constants/LoginConstants';
import BaseStore from './BaseStore';
import jwt_decode from 'jwt-decode';


class LoginStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this))
    this._user = null;
    this._jwt = null;
  }

  _registerToActions(action) {
    switch(action.actionType) {
      case LOGIN_USER:
        this._jwt = action.jwt;
        this._user = jwt_decode(this._jwt);
        this.emitChange();
        break;
      case LOGOUT_USER:
        this._user = null;
        this.emitChange();
        break;
      default:
        break;
    };
  }

  get user() {
    return this._user;
  }

  get jwt() {
    return this._jwt;
  }

  isLoggedIn() {
    return !!this._user;
  }
}

export default new LoginStore();


/**import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class EmployeeSessionStore extends EventEmitter {
  constructor() {
    super()
    this.employee = "guest";
  }

  userLogin(userId) {
    this.employee = userId;

    this.emit("change");
  }

  getUser() {
    return this.employee;
  }

  handleActions(action) {
    switch(action.type) {
      case "USER_SIGIN_IN": {
        this.userLogin(action.loggedUser);
        break;
      }
      case "USER_SIGN_OUT": {
        this.employee = "guest";
        this.emit("change");
        break;
      }
    }
  }
}

const employeeSessionStore = new EmployeeSessionStore;
dispatcher.register(employeeSessionStore.handleActions.bind(employeeSessionStore));

export default employeeSessionStore;
*/
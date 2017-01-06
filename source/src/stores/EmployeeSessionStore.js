import { EventEmitter } from "events";

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

import React, { Component } from 'react';
import ReactMixin from 'react-mixin';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import Auth from '../services/AuthService';

export default class SignIn extends React.Component {
  constructor() {
    super()
    this.state = {
      userId: ''
    };
  }
  getDefaultProps() {
    return {
      userId: '',
      showComponent: false,
    };
  }
  getInitialState() {
    return {
      showComponent: false,
      userId: '',
    };
  }
  OnClickSignIn() {
    this.setState({ showComponent: true, userId: document.getElementById("loginUserId").value });
    EmployeeSessionStore.userLogin(userId);
  }
  OnClickDisplayNumber(item) {
    var userInput = this.state.userId += item;
    console.log('User input value : ' + item + ' \n Full User ID : ' + this.state.userId);
    this.setState({ userId: userInput });
  }
 login(e) {
    e.preventDefault();
    Auth.login(this.state.user, this.state.password)
      .catch(function(err) {
        alert("There's an error logging in");
        console.log("Error logging in", err);
      });
  }
/**   render() {
    return (
      <div id="SignInPage" >
        <div id="NumPadDiv" class='SignInNumPad'>
          <h4 class="Heading"> OpenPOS </h4>
          <h1 class="Heading"> Sign In </h1>
          <input type="password" id="loginUserId" valueLink={this.linkState('userId')} class="loginUserId"></input><br />
          <button class="NumPad-button" data-char='1' onClick={this.OnClickDisplayNumber.bind(this, '1')}>1</button><span class="NumPad-button" />
          <button class="NumPad-button" data-char='2' onClick={this.OnClickDisplayNumber.bind(this, '2')}>2</button><span class="NumPad-button" />
          <button class="NumPad-button" data-char='3' onClick={this.OnClickDisplayNumber.bind(this, '3')}>3</button><br />
          <button class="NumPad-button" data-char='4' onClick={this.OnClickDisplayNumber.bind(this, '4')}>4</button><span class="NumPad-button" />
          <button class="NumPad-button" data-char='5' onClick={this.OnClickDisplayNumber.bind(this, '5')}>5</button><span class="NumPad-button" />
          <button class="NumPad-button" data-char='6' onClick={this.OnClickDisplayNumber.bind(this, '6')}>6</button><br />
          <button class="NumPad-button" data-char='7' onClick={this.OnClickDisplayNumber.bind(this, '7')}>7</button><span class="NumPad-button" />
          <button class="NumPad-button" data-char='8' onClick={this.OnClickDisplayNumber.bind(this, '8')}>8</button><span class="NumPad-button" />
          <button class="NumPad-button" data-char='9' onClick={this.OnClickDisplayNumber.bind(this, '9')}>9</button><br />
          <button class="NumPad-button" data-char='0' onClick={this.OnClickDisplayNumber.bind(this, '0')}>0</button>
          <br />
          <button id='SignInNumPad-Sign' onClick={this.login.bind(this)}>Sign In</button>
          <button id='SignInNumPad-Clear' onClick="">Clear</button>
        </div>
        {
          this.state.showComponent ?
            <StartPage /> :
            null
        }

        {
          this.state.showComponent ?
            document.getElementById("NumPadDiv").hidden = true :
            null
        }

      </div>
    );
  }*/
    render() {
    return (
      <div className="login jumbotron center-block">
        <h1>Login</h1>
        <form role="form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" valueLink={this.linkState('user')} className="form-control" id="username" placeholder="Username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" valueLink={this.linkState('password')} className="form-control" id="password" ref="password" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-default" onClick={this.login.bind(this)}>Submit</button>
      </form>
    </div>
    );
  }
}

ReactMixin(SignIn.prototype, LinkedStateMixin);

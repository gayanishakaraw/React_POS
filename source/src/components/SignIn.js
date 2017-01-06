import React, { Component } from 'react';
import StartPage from './StartPage';
import EmployeeSessionStore from '../stores/EmployeeSessionStore';
import * as EmployeeSignInActions from '../actions/EmployeeSignInActions';

var SignIn = React.createClass({
  //class SignIn extends Component {
  propTypes: {
    userId: React.PropTypes.string,
    showComponent: React.PropTypes.bool,
  },
  getDefaultProps() {
    return {
      userId: '',
      showComponent: false,
    };
  },
  getInitialState() {
    return {
      showComponent: false,
      userId: '',
    };
  },

  OnClickSignIn() {
    this.setState({ showComponent: true, userId: document.getElementById("loginUserId").value });
    EmployeeSessionStore.userLogin(userId);
  },

  OnClickDisplayNumber(item) {
    var userInput = this.state.userId += item;
    console.log('User input value : ' + item + ' \n Full User ID : ' + this.state.userId);
    this.setState({ userId: userInput });
  },

  render() {
    return (
      <div id="SignInPage" >
        <div id="NumPadDiv" class='SignInNumPad'>
          <h4 class="Heading"> OpenPOS </h4>
          <h1 class="Heading"> Sign In </h1>
          <input type="password" id="loginUserId" class="loginUserId" value={this.state.userId} ></input><br />
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
          <button id='SignInNumPad-Sign' onClick={this.OnClickSignIn.bind(this)}>Sign In</button>
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
  }
});

module.exports = SignIn;



import React, { Component } from 'react';
import StartPage from './StartPage';
import EmployeeSessionStore from '../stores/EmployeeSessionStore';
import * as EmployeeSignInActions from '../actions/EmployeeSignInActions';

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: ''
    };
  }

  getInitialState() {
    return {
      showComponent: false,
      userId: '',
    };
  }

  OnClickSignIn() {
    this.setState({ showComponent: true, userId: this.state.userId });
    EmployeeSessionStore.userLogin(this.state.userId);
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
          <button id='SignInNumPad-Clear' onClick={this.getInitialState.bind(this)}>Clear</button>
        </div>
        {
          this.state.showComponent ?
            <StartPage userId={this.state.userId }/> :
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
}

SignIn.defaultProps = {userId: ''};
SignIn.propTypes = {userId: ''};
export default SignIn;

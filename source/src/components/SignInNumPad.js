import React, { Component } from 'react';
import StartPage from './StartPage';

class SignInNumPad extends Component {

constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this.OnClickSignIn = this.OnClickSignIn.bind(this);
  }

  OnClickSignIn() {
    this.setState({
      showComponent: true,
    });
  }

  OnClickDisplayNumber(item){
     //document.getElementById("EmployeeId").value += item;
  }

  render() {
    return (
      <div class='SignInNumPad'>
         <h1> Sign In </h1>
        <textarea id="EmployeeId"></textarea><br/>
        <button class="input-button" data-char='1' onClick={this.OnClickDisplayNumber}>1</button>
        <button class="input-button" data-char='2' onClick={this.OnClickDisplayNumber}>2</button>
        <button class="input-button" data-char='3'>3</button><br/>
        <button class="input-button" data-char='4'>4</button>
        <button class="input-button" data-char='5'>5</button>
        <button class="input-button" data-char='6'>6</button><br/>
        <button class="input-button" data-char='7'>7</button>
        <button class="input-button" data-char='8'>8</button>
        <button class="input-button" data-char='9'>9</button><br/>
         <button id='SignInNumPad-Sign' onClick={this.OnClickSignIn.bind(this)}>Sign In</button>
         {this.state.showComponent ?
           <StartPage /> :
           null
        }
        <button class="input-button" data-char='0'>0</button>
        <button id='SignInNumPad-Sign' onClick="">Clear</button>
      </div>
    );
  }
}

export default SignInNumPad;
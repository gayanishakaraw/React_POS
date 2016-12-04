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
    {/*this.SignInNumPad.div.class = ".Hidden" ;*/}
  }

  OnClickDisplayNumber(item){
      document.getElementById("signInPassword").value += item;
  }

  render() {
    return (
      <div id="SignInPage" >
        <div id="NumPadDiv" class='SignInNumPad'>
        <h1 id="Heading"> Sign In </h1>
        <input type="password" id="signInPassword" class="SignInPasswordField" ></input><br/>
        <button class="NumPad-button" data-char='1' onClick={this.OnClickDisplayNumber.bind(this,'1')}>1</button><span class="NumPad-button"/>
        <button class="NumPad-button" data-char='2' onClick={this.OnClickDisplayNumber.bind(this,'2')}>2</button><span class="NumPad-button"/>
        <button class="NumPad-button" data-char='3' onClick={this.OnClickDisplayNumber.bind(this,'3')}>3</button><br/>
        <button class="NumPad-button" data-char='4' onClick={this.OnClickDisplayNumber.bind(this,'4')}>4</button><span class="NumPad-button"/>
        <button class="NumPad-button" data-char='5' onClick={this.OnClickDisplayNumber.bind(this,'5')}>5</button><span class="NumPad-button"/>
        <button class="NumPad-button" data-char='6' onClick={this.OnClickDisplayNumber.bind(this,'6')}>6</button><br/>
        <button class="NumPad-button" data-char='7' onClick={this.OnClickDisplayNumber.bind(this,'7')}>7</button><span class="NumPad-button"/>
        <button class="NumPad-button" data-char='8' onClick={this.OnClickDisplayNumber.bind(this,'8')}>8</button><span class="NumPad-button"/>
        <button class="NumPad-button" data-char='9' onClick={this.OnClickDisplayNumber.bind(this,'9')}>9</button><br/>
        <button class="NumPad-button" data-char='0' onClick={this.OnClickDisplayNumber.bind(this,'0')}>0</button>
        <br/>       
        <button class="signinClear-button" id='SignInNumPad-Sign' onClick={this.OnClickSignIn.bind(this)}>Sign In</button>
        <button class="signinClear-button" id='SignInNumPad-Clear' onClick="">Clear</button>
        </div>

         {
           this.state.showComponent ?
           <StartPage /> :
            null
         }

         {
           this.state.showComponent ?
           document.getElementById("NumPadDiv").hidden = true:
           null
         }

      </div>
    );
  }
}

export default SignInNumPad;
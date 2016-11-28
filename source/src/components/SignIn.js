import React, {Component} from 'react';

import SignInNumPad from './SignInNumPad';
import LeftPane from './LeftPane';
import RightPane from './Rightpane';

class SignIn extends Component{
   
  render() {
        return (
            <div className="SignPage" id="Login"> 
            <SignInNumPad/>
            </div>         
        );
    }
}

export default SignIn;
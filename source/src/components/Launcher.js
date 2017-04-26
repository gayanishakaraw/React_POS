import React, {Component} from 'react';

import SignIn from './SignIn';

class Launcher extends Component{
   
  render() {
        return (
            <div className="SignPage" id="SignIn"> 
            <SignIn/>
            </div>         
        );
    }
}

export default Launcher;
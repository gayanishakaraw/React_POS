import React, { Component } from 'react';
import LoginState from "./LoginState";

class TopHeader extends Component {
    render() {
        return (
            <div id="topheader">
                <div id="branding">
                    <h1 class="posName">OpenPOS</h1>
                </div>
             
              
                <div>
                    <LoginState  />
                </div>
            </div>
        );
    }
}

export default TopHeader;
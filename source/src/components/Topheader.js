import React, { Component } from 'react';
import LoginState from "./LoginState";

class TopHeader extends Component {
    render() {
        return (
            <div id="topheader">
                <div id="branding">
                    <h1 class="posName">OpenPOS</h1>
                </div>
                <div id='steps' class="steps">
                </div>
                <div id='rightheader'>
                    <div id='orderstack'></div>
                    <button id="neworder-button">+</button>
                </div>
                <div>
                    <LoginState  />
                </div>
            </div>
        );
    }
}

export default TopHeader;
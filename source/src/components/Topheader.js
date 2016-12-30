import React, { Component } from 'react';
import LoginState from "./LoginState";

class TopHeader extends Component {
    render() {
        return (
            <div id="topheader">
                <div>
                    <h1 class="posName">OpenPOS v.1.0.0 | FLUX + ReactJS |</h1>
                </div>

                {/* TODO : Implement the session state */}
                <div>
                    <LoginState />
                </div>
            </div>
        );
    }
}

export default TopHeader;
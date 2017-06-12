import React, { Component } from 'react';
import LoginState from "./LoginState";

class TopHeader extends Component {
      constructor(props) {
    super(props)
    this.state = {
      userId: this.props.userId
    };
  }
    render() {
        return (
            <div id="topheader">
                <div>
                    <h1 class="posName">OpenPOS v.1.0.0 | FLUX + ReactJS |</h1>
                    <h1 class="user" ></h1>
                    
                </div>

                {/* TODO : Implement the session state */}
                <div>
                    {this.state.userId}
                </div>
            </div>
        );
    }
}

export default TopHeader;
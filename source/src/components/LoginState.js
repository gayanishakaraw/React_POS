import React, {Component} from 'react';
import UserName from "./UserState/UserName";

class LoginState extends Component {
    handleChange(e) {
        const userName = e.target.value;
        this.props.changeLoginState(userName);
    }

    render() {
        return (
            <div id='loginState' align='right'>
     TEST USER
            </div>
        );
    }
}

export default LoginState;
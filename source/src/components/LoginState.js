import React, {Component} from 'react';
import UserName from "./UserState/UserName";

class LoginState extends Component {
    handleChange(e) {
        const userName = e.target.value;
        this.props.changeLoginState(userName);
    }

    render() {
        return (
            <div id='loginState'>
     TEST USER ID :
            </div>
        );
    }
}

export default LoginState;
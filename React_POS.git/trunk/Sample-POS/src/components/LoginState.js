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
                <UserName userName={this.props.userName} />
                <input value={this.props.userName} onChange={this.handleChange.bind(this) } />
                {/*<p value={this.props.userName}></p>*/}
                &nbsp;<button>Sign In</button>
            </div>
        );
    }
}

export default LoginState;
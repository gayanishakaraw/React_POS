import React, { Component } from 'react';
import SignIn from './SignIn';

const Users = {
    title: 'Mr',
    name: 'Gayan Wimalarathna',
    employeeId: 1,
    password: 2211
};

const props = {
  userId: typeof(string),
};

class Launcher extends Component {

    render() {
        return (
            <div className="SignPage" id="SignIn">
                <SignIn userId={this.props.userId} />
            </div>
        );
    }
}

export default Launcher;
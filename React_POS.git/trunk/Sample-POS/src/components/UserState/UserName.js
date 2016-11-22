import React, {Component} from 'react';

export default class UserName extends Component {
    render() {
        return (
            <h1>{this.props.userName}</h1>
        );
    }
}

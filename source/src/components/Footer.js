import React, { Component } from 'react';
import NumPad from "./Numpad";
import CheckSummary from './CheckSummary';

class Footer extends Component {
    render() {
        return (
            <footer>
                <CheckSummary/>
                <NumPad />
            </footer>
        );
    }
}

export default Footer;
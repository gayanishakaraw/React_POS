import React, { Component } from 'react';
import NumPad from "./Numpad";

class Footer extends Component {
    render() {
        return (
            <footer>
                <ul id='amounts'>
                    <li> Subtotal: <span id="subtotal">0</span> LKR</li>
                    <li> Tax: <span id="tax">0</span> LKR</li>
                    <li> Total: <span id="total">0</span> LKR</li>
                </ul>
                <ul id='paypad'>
                </ul>
                <NumPad />
            </footer>
        );
    }
}

export default Footer;
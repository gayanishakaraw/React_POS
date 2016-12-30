import React, {Component} from 'react';

{/* TODO : Implement the total summary calculation*/}
class CheckSummary extends Component {
    render() {
        return (
            <div>
             <ul id='amounts'>
                    <li> Subtotal: <span id="subtotal">0</span> LKR</li>
                    <li> Tax: <span id="tax">0</span> LKR</li>
                    <li> Total: <span id="total">0</span> LKR</li>
                </ul>   
            </div>
        );
    }
}

export default CheckSummary;
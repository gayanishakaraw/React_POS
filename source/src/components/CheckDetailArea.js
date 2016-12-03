import React, { Component } from 'react';
import CheckDetailItem from "./CheckDetailItem";

class CheckDetailArea extends Component {
    render() {
        return (
            <div id='receipt'>
                <table>
                    <thead>
                        <tr>
                            <td>Product</td>
                            <td>Price</td>
                            <td>Disc (%) </td>
                            <td>Qty</td>
                            <td>Total</td>
                        </tr>
                    </thead>
                    <tr>
                        <td>
                            <CheckDetailItem />
                            <CheckDetailItem />
                            <CheckDetailItem />
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default CheckDetailArea;


import React, { Component } from 'react';

class CheckDetailItem extends Component {
    render() {
      const { menuItemId, menuItemName, qty, price } = this.props;
        
        return (
            <tr id={menuItemId}>
                <td>{menuItemName}</td>
                <td>{price}</td>
                <td></td>
                <td>{qty}</td>
                <td>{qty * price}</td>
            </tr>
        );
    }
}

export default CheckDetailItem;
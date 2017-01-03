import React, { Component } from 'react';

class CheckDetailItem extends Component {
    render() {
      const { menuItemId, menuItemName, qty, price, selected } = this.props;

        return (
            <tr id={menuItemId} onClick={this.handleClick.bind(this)} >
                <td>{menuItemName}</td>
                <td>{price}</td>
                <td></td>
                <td>{qty}</td>
                <td>{qty * price}</td>
            </tr>
        );
    }
    handleClick() {
        this.selected = (!this.selected)? true: false;
    }
}

export default CheckDetailItem;
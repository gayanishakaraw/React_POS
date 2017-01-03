import React, { Component } from 'react';

class CheckDetailItem extends Component {
    render() {
      const { menuItemId, menuItemName, qty, price, selected } = this.props;
      
      var hStyle={
        'background-color': "rebeccapurple",
        color: "white"
      };
      
      var nStyle = {
          //color: "black"
      };

        return (
            <tr id={menuItemId} style = {selected ? hStyle: nStyle} onClick={this.handleClick.bind(this)} >
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
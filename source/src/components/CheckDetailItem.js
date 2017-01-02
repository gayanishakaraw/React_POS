import React, { Component } from 'react';

class CheckDetailItem extends Component {
    render() {
      const { menuItemId, menuItemName, qty, price, selected } = this.props;
      
        
        return (
            <tr id={menuItemId} onClick={this.handleClick.bind(this,"selected")} >
                <td>{menuItemName}</td>
                <td>{price}</td>
                <td></td>
                <td>{qty}</td>
                <td>{qty * price}</td>
            </tr>
        );
    }
    handleClick(className, obj) {
        //ToDo
        {/*if (obj.className.indexOf(className) >= 0) {
            obj.className = obj
                .className
                .replace(className, "");
        } else {
            obj.className += className;
        }*/}
        alert(className);
    }
}

export default CheckDetailItem;
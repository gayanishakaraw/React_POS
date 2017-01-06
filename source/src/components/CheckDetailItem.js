import React, { Component } from 'react';

class CheckDetailItem extends Component {
    getInitialState() {
        return {
            itemStyle: "hStyle",
            isItemSelected: false
        };
    };

    changeStyle() {
        if (this.isItemSelected) {
            this.setState({ itemStyle : "nStyle" });
        }
    };

    render() {
        const { menuItemId, menuItemName, qty, price, selected } = this.props;

        var hStyle = {
            'background-color': "rebeccapurple",
            color: "white"
        };

        var nStyle = {
            //background:
        };

        return (
            <tr id={menuItemId} highlighted={this.isItemSelected} style={this.itemStyle} onClick={this.handleClick.bind(this)} >
                <td>{menuItemName}</td>
                <td>{price}</td>
                <td></td>
                <td>{qty}</td>
                <td>{qty * price}</td>
            </tr>
        );
    }
    handleClick() {
        this.isItemSelected = (!this.props.selected) ? true : false;
        this.changeStyle();
    }
}

export default CheckDetailItem;
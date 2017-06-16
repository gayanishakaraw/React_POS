import React, { Component } from 'react';

const SelectActionStyles = {
    color: 'blue',
    backgroundColor: 'black'
};

const DefaultStyles = {
    color: 'black',
    backgroundColor: 'white'
};

class CheckDetailItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuItemId: 0,
            menuItemName: '',
            qty: 0,
            price: 0.00,
            selected: false
        };
        this.itemStyle = { DefaultStyles };
        this.isItemSelected = false;
    }

    changeStyle() {
        if (this.isItemSelected) {
            var tr = document.getElementById(this.props.id);
            tr.style.backgroundColor = "#9b59b6";

            this.setState(this.itemStyle = { SelectActionStyles });
            this.isItemSelected = true;
        }
        else {
            var tr = document.getElementById(this.props.id);
            tr.style.backgroundColor = "white";

            this.setState(this.itemStyle = { DefaultStyles });
            this.isItemSelected = false;
        };
    }

    render() {    
        return (
            <tr id={this.props.id} style={this.itemStyle} onClick={this.handleClick.bind(this)} >
                <td>{this.props.menuItemName}</td>
                <td>{this.props.price}</td>
                <td></td>
                <td>{this.props.qty}</td>
                <td>{this.props.qty * this.props.price}</td>
            </tr>
        );
    }

    handleClick() {
        this.isItemSelected = (!this.isItemSelected) ? true : false;
        this.changeStyle();
    }
}

CheckDetailItem.defaultProps = { menuItemId: 0, menuItemName: '', qty: 0, price: 0.00, selected: false };
CheckDetailItem.propTypes = {
    menuItemId: React.PropTypes.number,
    menuItemName: React.PropTypes.string,
    qty: React.PropTypes.number,
    price: React.PropTypes.number,
    selected: React.PropTypes.boolian
};

export default CheckDetailItem;
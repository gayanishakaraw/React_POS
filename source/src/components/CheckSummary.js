import React, { Component } from 'react';
import CheckDetailsStore from '../stores/CheckDetailsStore';
var numeral = require('numeral');

export default class Featured extends React.Component {
    constructor() {
        super();
        this.menuItems = [];
        this.getCheckTotals = this.getCheckTotals.bind(this);
        this.state = {
            details: CheckDetailsStore.getAll(),
            subtotal: CheckDetailsStore.getSubTotal(),
        };
    }
    componentWillMount() {
        CheckDetailsStore.on("change", this.getCheckTotals);
    }

    componentWillUnmount() {
        CheckDetailsStore.removeListener("change", this.getCheckTotals);
    }

    getCheckTotals() {
        this.setState({
            subtotal: CheckDetailsStore.getSubTotal()
        });
    }

    getMenuItems() {
        this.setState({
            details: CheckDetailsStore.getAll(),
        });
    }

    render() {
        const { subtotal } = this.state.subtotal;
        var subTtlVal = numeral(this.state.subtotal).format('0.00')
        var taxPercentage = 2;
        var taxAmount = this.state.subtotal * (taxPercentage/100);
        var checkTotal = this.state.subtotal + taxAmount; 
        return (
            <div>
                <ul id='amounts'>
                    <li> Subtotal: <span id="subtotal">{numeral(this.state.subtotal).format('0.00')}</span></li>
                    <li> Tax: <span id="tax">{numeral(taxAmount).format('0.00')}</span></li>
                    <li> Total: <span id="total">{numeral(checkTotal).format('0.00')}</span></li>
                </ul>
            </div>
        );
    }
}
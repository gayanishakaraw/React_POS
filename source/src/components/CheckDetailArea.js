import React, { Component } from 'react';
import CheckDetailItem from "./CheckDetailItem";
import CheckDetailsStore from '../stores/CheckDetailsStore';

export default class Featured extends React.Component {
    constructor() {
        super();
        this.getMenuItems = this.getMenuItems.bind(this);
        this.state = {
            checkDetails: CheckDetailsStore.getAll(),
        };
    }

    componentWillMount() {
        CheckDetailsStore.on("change", this.getMenuItems);
    }

    componentWillUnmount() {
        CheckDetailsStore.removeListener("change", this.getMenuItems);
    }

    getMenuItems() {
        this.setState({
            checkDetails: CheckDetailsStore.getAll(),
        });
    }

    render() {
        const { checkDetails } = this.state;

        const CheckDetailComponents = checkDetails.map((menuItem) => {
            return <CheckDetailItem key={menuItem.id} id={menuItem.id} menuItemName={menuItem.text} price={menuItem.price} qty={menuItem.qty} selected={menuItem.selected}/>;
        });

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
                    <tbody>
                    {CheckDetailComponents}
                    </tbody>
                </table>
            </div>
        );
    }
}


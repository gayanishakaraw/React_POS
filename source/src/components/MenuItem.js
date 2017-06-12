import React, { Component } from 'react';
import SearchBox from './SearchBox';
import * as MenuItemActions from '../actions/MenuItemActions';
import MenuItemStore from '../stores/MenuItemStore';
import CheckDetailsStore from '../stores/CheckDetailsStore';
import MenuItemDetail from './MenuItemDetail';
import MenuItemList from './MenuItemList';

class MenuItem extends Component {
    render() {
        var menuItems = [
            { id: 1, miName: 'Chicken Pizza', price: 1750.00, qty: 1, selected: false},
            { id: 2, miName: 'Beef Burger', price: 500.00, qty: 1 , selected: false},
            { id: 3, miName: 'Sandwitch', price: 150.00, qty: 1, selected: false },
            { id: 4, miName: 'Nachose', price: 1150.00, qty: 1, selected: false },
            { id: 5, miName: 'Egg Koththu', price: 450.00, qty: 1, selected: false },
            { id: 6, miName: 'Fish Rice', price: 250.00, qty: 1, selected: false },
            { id: 7, miName: 'Pasta', price: 850.00, qty: 1, selected: false },
            { id: 8, miName: 'Fish Bun', price: 50.00, qty: 1, selected: false },
            { id: 9, miName: 'Coca-Cola', price: 60.00, qty: 1, selected: false },
            { id: 10, miName: 'Rotty', price: 40.00, qty: 1, selected: false },
            { id: 11, miName: 'Chicken Curry', price: 180.00, qty: 1, selected: false },
            { id: 12, miName: 'Ice Tea', price: 480.00, qty: 1, selected: false },
        ];

        return (
            <MenuItemList menuItems={menuItems} />
        );
    }
}
export default MenuItem;




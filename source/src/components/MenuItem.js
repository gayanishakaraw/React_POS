import React, { Component } from 'react';
import SearchBox from './SearchBox';
import * as MenuItemActions from '../actions/MenuItemActions';
import MenuItemStore from '../stores/MenuItemStore';

class MenuItem extends Component {
    render() {
        var menuItems = [
            { miName: 'Chicken Pizza', price: 1750.00 },
            { miName: 'Beef Burger', price: 500.00 },
            { miName: 'Sandwitch', price: 150.00 },
            { miName: 'Nachose', price: 1150.00 },
            { miName: 'Egg Koththu', price: 450.00 },
            { miName: 'Fish Rice', price: 250.00 },
            { miName: 'Pasta', price: 850.00 },
            { miName: 'Fish Bun', price: 50.00 },
            { miName: 'Coca-Cola', price: 60.00 },
            { miName: 'Roti', price: 40.00 },
            { miName: 'Chicken Curry', price: 180.00 },
        ];

        return (
            <div>
                <MenuItemList menuItems={menuItems} />
            </div>
        );
    }
}
export default MenuItem;

var MenuItemList = React.createClass({
    render: function () {
        var items = this.props.menuItems.map(function (menuitem) {
            return (
                <MenuItemDetail key={menuitem.id} menuitem={menuitem} />
            );
        });
        return (
            <table>
                {items}
            </table>
        );
    }
});

var MenuItemDetail = React.createClass({
    render: function () {
        return (
            <tr>
                <input type="button" class="menuItem" value={this.props.menuitem.miName} onClick={this.AddMenuItem.bind(this.props.menuitem)}/>
            </tr>
        );
    },

    AddMenuItem: function (menuitem) {
        MenuItemActions.addMenuItem(this.props.menuitem.miName, this.props.menuitem.price);
        alert('LOGIC to add menu item : '+ this.props.menuitem.miName);
    }
});

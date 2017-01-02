import React, { Component } from 'react';
import SearchBox from './SearchBox';
import * as MenuItemActions from '../actions/MenuItemActions';
import MenuItemStore from '../stores/MenuItemStore';
import CheckDetailsStore from '../stores/CheckDetailsStore';

class MenuItem extends Component {
    render() {
        var menuItems = [
            { miName: 'Chicken Pizza',  price: 1750.00, qty: 1   },
            { miName: 'Beef Burger',    price: 500.00,  qty: 1   },
            { miName: 'Sandwitch',      price: 150.00,  qty: 1   },
            { miName: 'Nachose',        price: 1150.00, qty: 1   },
            { miName: 'Egg Koththu',    price: 450.00,  qty: 1   },
            { miName: 'Fish Rice',      price: 250.00,  qty: 1   },
            { miName: 'Pasta',          price: 850.00,  qty: 1   },
            { miName: 'Fish Bun',       price: 50.00,   qty: 1   },
            { miName: 'Coca-Cola',      price: 60.00,   qty: 1   },
            { miName: 'Rotty',          price: 40.00,   qty: 1   },
            { miName: 'Chicken Curry',  price: 180.00,  qty: 1   },
            { miName: 'Ice Tea',        price: 480.00,  qty: 1   },
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
        CheckDetailsStore.addMenuItem(this.props.menuitem.miName, this.props.menuitem.price, this.props.menuitem.qty);
    }
});

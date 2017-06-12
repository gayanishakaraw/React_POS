import React, { Component } from 'react';
import MenuItemDetail from './MenuItemDetail';

class MenuItemList extends Component {
    render() {
        var items = this.props.menuItems.map(function (menuitem) {
            return (
                <MenuItemDetail key={menuitem.id} menuitem={menuitem} />
            );
        });
        return (
            <div>
                {items}
            </div>
        );
    }
}
export default MenuItemList;
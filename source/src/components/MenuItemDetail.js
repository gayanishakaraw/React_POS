import React, { Component } from 'react';
import CheckDetailsStore from '../stores/CheckDetailsStore';

class MenuItemDetail extends Component {
    render() {
        return (
            <input type="button" class="menuItem" value={this.props.menuitem.miName} onClick={this.AddMenuItem.bind(this.props.menuitem)} />
        );
    }

    AddMenuItem(menuitem) {
        CheckDetailsStore.addMenuItem(this.id, this.miName, this.price, this.qty, this.selected);
    }
}

export default MenuItemDetail;
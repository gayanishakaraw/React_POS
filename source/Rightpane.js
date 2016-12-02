import React, { Component } from 'react';

import Autocomplete from './SearchBox'

class RightPane extends Component {
    render() {
        return (
            <div id='rightpane'>
                <header>
                    <ol class="breadcrum">
                        <li>
                            <a href="#"><img src="../static/img/home.png" class="homeimg" /></a>
                        </li>
                    </ol>
                    <Autocomplete/>
                </header>

                <div id="categories">
                    <h4>Categories: </h4>
                    <ol></ol>
                </div>
                <input type="button" id="getMenuItemList" value="Show Menu Items" onclick="getMenuItemList()" />
                <div id="menuItems"></div>
            </div>
        );
    }
}

export default RightPane;
import React, { Component } from 'react';

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
                    <input class="searchbox" placeholder="Search Products" />
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
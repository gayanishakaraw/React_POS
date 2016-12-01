import "babel/polyfill";
import React, { Component } from 'react';
import Search from './SearchBox'

const matches = {
  'Burger a': [
    'Burger chk 1 ',
    'Burger beef 11 ',
    'Berger fish '
  ],
  'Burger p': [
    'Burger mac fish cheese',
    'Burger mac chk cheese',
    'Burger mac cheese'
  ]
};

class RightPane extends Component{

 onChange(input, resolve) {
    // Simulate AJAX request
    setTimeout(() => {
      const suggestions = matches[Object.keys(matches).find((partial) => {
        return input.match(new RegExp(partial), 'i');
      })] || ['Burger', 'Burger mac', 'Burger chk'];

      resolve(suggestions.filter((suggestion) =>
        suggestion.match(new RegExp('^' + input.replace(/\W\s/g, ''), 'i'))
      ));
    }, 25);
  }
  onSearch(input) {
    if (!input) return;
    console.info(`Searching "${input}"`);
  }

    render() {
        return (
            <div id='rightpane'>
                <header>
                    <ol class="breadcrum">
                        <li>
                            <a href="#"><img src="../static/img/home.png" class="homeimg" /></a>
                        </li>
                    </ol>
                   <Search placeholder="Search Menu Items"  onChange={this.onChange}  onSearch={this.onSearch} />
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
import React, { Component } from 'react';
import SearchBar from './SearchBox';
import MenuItem from './MenuItem';

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
      })] || ['Burger', 'mac', 'Burger chk', 'Pizza'];

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
                    <br/>
                  </header>
                  <body>
                  {/*<div class="DivDesign">
                    <SearchBar placeholder="Search Menu Items"  onChange={this.onChange}  onSearch={this.onSearch} />
                 </div>*/}
                 <br/>
                 <br/>
                </body>
                
                <div id="categories">
                
                    <h4>Categories: </h4>
                    <ol></ol>
                </div>
                <div id="menuItems">
                <MenuItem/>
                </div>
            </div>
        );
    }
}

export default RightPane;
import React, {Component} from 'react';

class SearchBox extends Component {
    render() {
        return (
             React.DOM.div( {className:'autocomplete ' + (s.loading && 'loading')}, 
                    React.DOM.h3(null, "Search Wikipedia:"),
                    React.DOM.input(
                        {ref:"searchInput",
                        type:"search",
                        size:"50",
                        onFocus:this.onFocus,
                        onBlur:this.onBlur,
                        onKeyDown:this.onKeyDown,
                        onKeyUp:this.handlers.keyUp} )));
        
                }
                }

                export default SearchBox;
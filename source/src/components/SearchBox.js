import React, {Component} from 'react';
import Autosuggest from 'react-autosuggest';

 const languages = [
 {
    name: 'C',
    year: 1972
  },
  {
    name: 'Elm',
    year: 2012
  },
];

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
 
  return inputLength === 0 ? [] : languages.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

const getSuggestionValue = suggestion => suggestion.name;
 
// Use your imagination to render suggestions. 
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);

class SearchBox extends Component {

constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions:[]
    };
 
  }
    ShowResults = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

   onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };
 
  // Autosuggest will call this function every time you need to clear suggestions. 
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

    render() {
         const { value, suggestions } = this.state;
 
        // Autosuggest will pass through all these props to the input element. 
        const inputProps = {
            placeholder: 'Search Products',
            value,
            onChange: this.onChange
        };

        return (
              <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps}
                />
            );
    }
}

export default SearchBox;
import React, { Component } from 'react';
import Footer from "./Footer";
import CheckDetailArea from "./CheckDetailArea"

class LeftPane extends Component {
  render() {
    return (
      <div id='leftpane'>
        <CheckDetailArea />
        <Footer />
      </div>
    );
  }
}

export default LeftPane;
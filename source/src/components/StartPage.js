import React, {Component} from 'react';

import TopHeader from "./TopHeader";
import Content from "./Content";

class StartPage extends Component {  
    constructor(props) {
    super(props)
    this.state = {
      userId: this.props.userId
    };
  }

    render() {
        return (
            <div>
                <TopHeader/>
                <Content/>
            </div>
        );
    }
}

export default StartPage;
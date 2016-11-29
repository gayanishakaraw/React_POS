import React, {Component} from 'react';

import TopHeader from "./TopHeader";
import Content from "./Content";

class StartPage extends Component {
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
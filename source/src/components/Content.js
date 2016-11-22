import React, {Component} from 'react';
import LeftPane from "./Leftpane";
import RightPane from "./Rightpane";

class content extends Component {
    render() {
        return (
            <div id="content">
                <LeftPane/>
                <RightPane />
            </div>
        );
    }
}

export default content;
import React, {Component} from 'react';

import TopHeader from "./TopHeader";
import Content from "./Content";
import SignIn from "./SignIn";

class Layout extends Component {
    render() {
        return (
            <div>
                <SignIn />
            </div>
        );
    }
}

export default Layout;
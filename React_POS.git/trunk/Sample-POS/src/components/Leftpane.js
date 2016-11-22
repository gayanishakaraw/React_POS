import React, {Component} from 'react';
import Footer from "./Footer"

class LeftPane extends Component {
  render() {
    return (
      <div id='leftpane'>
        <div id='receipt'>
          <table>
            <thead>
              <tr>
                <td>Product</td>
                <td>Price</td>
                <td>Disc (%) </td>
                <td>Qty</td>
                <td>Total</td>
              </tr>
            </thead>
          </table>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default LeftPane;
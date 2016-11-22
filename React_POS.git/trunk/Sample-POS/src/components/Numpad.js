import React, {Component} from 'react';

class NumPad extends Component {
  render() {
    return (
      <div class='numpad'>
        <button class="input-button" data-char='1'>1</button>
        <button class="input-button" data-char='2'>2</button>
        <button class="input-button" data-char='3'>3</button>
        <button class="mode-button selected-mode" data-mode='quantity'>Qty</button><br/>
        <button class="input-button" data-char='4'>4</button>
        <button class="input-button" data-char='5'>5</button>
        <button class="input-button" data-char='6'>6</button>
        <button class="mode-button" data-mode='discount'>Disc</button><br/>
        <button class="input-button" data-char='7'>7</button>
        <button class="input-button" data-char='8'>8</button>
        <button class="input-button" data-char='9'>9</button>
        <button class="mode-button" data-mode='list_price'>Price</button><br/>
        <button class="input-button" id="numpad-minus" data-char='+-'>+/-</button>
        <button class="input-button" data-char='0'>0</button>
        <button class="input-button" data-char='.'>.</button>
        <button class="mode-button">
          <img src="../static/img/barcode.png" width="24" height="21"/>
        </button>
        <br/>
        <button id='numpad-delete'>Delete</button>
        <button class="input-button" data-char='&lt;-'>
          <img src="../static/img/backspace.png" width="24" height="21"/>
        </button>
        <button class="mode-button" id='numpad-note'>Note</button>
      </div>
    );
  }
}

export default NumPad;
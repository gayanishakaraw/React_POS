import React, { Component } from 'react';

class CheckDetailItem extends Component {
    render() {
        return (
            <div id='checkDetailItem'>
                <p>Sample : TODO : NOT IMPLEMENTED</p><hr/>
            </div>
        );
    }
}

export default CheckDetailItem;

{/* USE THIS SAMPLE WHEN IMPLEMENTING
    render: function() {
  return (
    <table className="MyClassName">
      <thead>
        <tr>
          {this.props.titles.map(function(title) {
            return <th key={title}>{title}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {this.props.rows.map(function(row, i) {
          return (
            <tr key={i}>
              {row.map(function(col, j) {
                return <td key={j}>{col}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
} 
    */}
import React from 'react';

const UnicornFriend = React.createClass({
  render: function() {
    return (
      <div className="unicorn-friend">
        <h2>{this.props.name}</h2>
        <ul>
          <li>power: {this.props.power}</li>
          <li>color: {this.props.color}</li>
        </ul>
      </div>
    )
  }
});

export default UnicornFriend;

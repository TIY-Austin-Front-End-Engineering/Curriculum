import React from 'react';

const UnicornRow = React.createClass({
  render: function() {
    return (
      <section>
        <h2>{this.props.name}</h2>
        <div>Color: {this.props.color}</div>
        <div>Power: {this.props.power}</div>
      </section>
    )
  }
});

export default UnicornRow;

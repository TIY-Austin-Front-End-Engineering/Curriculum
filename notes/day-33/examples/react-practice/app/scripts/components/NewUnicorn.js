import React from 'react';
import unicornCollection from '../collections/unicorns.js';

const UniForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    let newUnicorn = {
      name: this.refs.name.value,
      power: this.refs.power.value,
      color: this.refs.color.value
    };
    unicornCollection.create(newUnicorn)
  },
  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          ref="name"/>
        <input
          type="text"
          placeholder="power"
          ref="power"/>
        <input
          type="text"
          placeholder="color"
          ref="color"/>
        <input
          type="submit"/>
      </form>
    )
  }
});

export default UniForm;

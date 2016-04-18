import React from 'react';
import {Link} from 'react-router';

const Nav = React.createClass({
  render: function() {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/newUnicorn">New Unicorn</Link>
        <Link to="/details">Details</Link>
      </nav>
    )
  }
});

export default Nav;

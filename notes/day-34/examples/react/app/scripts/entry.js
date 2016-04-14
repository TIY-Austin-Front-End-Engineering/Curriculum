// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';

import UnicornDetailsPage from './app.js';
import ReactDOM from 'react-dom';
import React from 'react';
import {Router, Route, hashHistory, Link} from 'react-router';
import Nav from './nav.js';

const Home = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Home!</h1>
        <Nav/>
      </div>
    )
  }
});

const Login = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Login!</h1>
        <Nav/>
      </div>
    )
  }
});

const NewUnicorn = React.createClass({
  render: function() {
    return (
      <div>
        <h1>NewUnicorn!</h1>
        <Nav/>
      </div>
    )
  }
});


const router = (
  <Router history={hashHistory}>
    <Route path="/" component={Home}/>
    <Route path="/login" component={Login}/>
    <Route path="/newUnicorn" component={NewUnicorn}/>
    <Route path="/details" component={UnicornDetailsPage}/>
  </Router>
)

ReactDOM.render(router, document.getElementById('app'));

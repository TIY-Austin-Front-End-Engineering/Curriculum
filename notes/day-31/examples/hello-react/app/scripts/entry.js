// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';
import cat from './../assets/orangecat.jpg';
import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List.js';

const Test = React.createClass({
	render: function() {
		return <h1 className="hello" htmlFor="">test</h1>;
	}
});




ReactDOM.render(<List />, document.querySelector('main'));







// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';

// import a module from another file.
import React from 'react';
import {render} from 'react-dom';

import App from './app.js';
// import UniForm from './components/NewUnicorn.js';

render(<App/>, document.getElementById('app')
);

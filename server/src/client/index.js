
import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../containers/Home';

// hydrate replace render
ReactDOM.hydrate(<Home />, document.getElementById('root'));
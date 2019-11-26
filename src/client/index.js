
import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../containers/Home';

// 注水 用于 同构
ReactDOM.hydrate(<Home />, document.getElementById('root'));


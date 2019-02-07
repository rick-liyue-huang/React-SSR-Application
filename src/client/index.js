
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../Routes';
// import Home from '../containers/Home';

const App = () => {
	return (
		<BrowserRouter>
			{Routes}
		</BrowserRouter>
	)
}

// hydrate replace render
// ReactDOM.hydrate(<Home />, document.getElementById('root'));
ReactDOM.hydrate(<App />, document.getElementById('root'));












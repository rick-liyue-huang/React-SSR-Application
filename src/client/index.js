
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from '../containers/Home';
import Routes from '../Routes';
// import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';

// const reducer = (state = {name: 'leo'}, action) => {
// 	return state;
// }

// const store = createStore(reducer, applyMiddleware(thunk));
import getStore from '../store';

const App = () => {
	return (
		<Provider store={getStore()}>
			<BrowserRouter>
				{ Routes }
			</BrowserRouter>
		</Provider>
	)
}

ReactDOM.hydrate(<App />, document.getElementById('root'));
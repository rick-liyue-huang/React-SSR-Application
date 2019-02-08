
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import routes from '../Routes';
// import Home from '../containers/Home';
// import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
import getStore from '../store';

// const reducer = (state = {name: 'rick'}, action) => {
// 	return state;
// }
// const store = createStore(reducer, applyMiddleware(thunk));

const App = () => {
	return (
		<Provider store={getStore()}>
			<BrowserRouter>
				<div>
					{
						/*Routes*/
						routes.map(route => (
							<Route {...route} />
						))
					}
				</div>
			</BrowserRouter>
		</Provider>
	)
}

// hydrate replace render
// ReactDOM.hydrate(<Home />, document.getElementById('root'));
ReactDOM.hydrate(<App />, document.getElementById('root'));












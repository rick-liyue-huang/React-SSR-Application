
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import Routes from '../Routes';
// import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
import getStore from '../store';

export const render = (req) => {
	// const reducer = (state = {name: 'leo'}, action) => {
	// 	return state;
	// }

	// const store = createStore(reducer, applyMiddleware(thunk));

	const content = renderToString((
		<Provider store={getStore()}>
			<StaticRouter location={req.path} context={{}}>
				{ Routes }
			</StaticRouter>
		</Provider>
	));

	return `
		<html>
			<head>
				<title>ok</title>
			</head>
			<body>
				<div id='root'>${content}</div>
				<!-- this is static file, which got from public dir -->
				<script src='/index.js'></script>
			</body>
		</html>
	`;
}


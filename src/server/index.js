
// const express = require('express');
// const Home = require('./containers/Home');
import express from 'express';
import { getStore } from '../store';
import routes from '../Routes';
import { matchRoutes } from 'react-router-config';

// import React from 'react';
// import { renderToString } from 'react-dom/server';
// import Home from '../containers/Home';
// import { StaticRouter } from 'react-router-dom';
// import Routes from '../Routes';
import { render } from './utils';

const app = express();
app.use(express.static('public'));
// const content = renderToString(<Home />);

app.get('*', (req, res) => {
	
	const store = getStore();

	const matchedRoutes = matchRoutes(routes, req.path);

	const promises = [];
	matchedRoutes.forEach(item => {
		// console.log(item.route.loadData);
		if(item.route.loadData) {
			promises.push(item.route.loadData(store));
		}
	});
	Promise.all(promises).then(() => {
		res.send(render(store, routes, req));
	})
	// res.send(render(req));
});

var server = app.listen(3000);












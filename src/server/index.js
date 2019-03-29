
/* because babel-preset-stage-0 we can use es module 
const express = require('express');
const app = express();
const Home = require('./containers/Home');
*/

/*
	virtual DOM is the map of real DOM, and can transfer to string to return to client
*/

import express from 'express';
import React from 'react';
// reactDOM in server
import { renderToString } from 'react-dom/server';
import Home from '../containers/Home';

const content = renderToString(<Home />);
const app = express(); 

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.send(`
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
	`);
});

app.listen(3000, () => {
	console.log(`server listen on 3000`);
});







// const express = require('express');
// const Home = require('./containers/Home');
import express from 'express';
import Home from './containers/Home';
import React from 'react';
import { renderToString } from 'react-dom/server';

const app = express();

app.use(express.static('./server/public'));

const content = renderToString(<Home />);

app.get('/', (req, res) => {
	res.send(`
		<html lang='en'>
			<head>
				<title>react ssr</title>
				<meta charset="utf-8" />
			</head>
			<body>
				<div id='root'>${content}</div>
				<script src="/index.js"></script>
			</body>
		</html>
	`);
});

app.listen(3000);













// const express = require('express');
// const Home = require('./containers/Home');
import express from 'express';
import Home from './containers/Home';
import React from 'react';
import { renderToString } from 'react-dom/server';

const app = express();
const content = renderToString(<Home />);

app.get('/', (req, res) => {
	res.send(`
		<html lang='en'>
			<head>
				<title>react ssr</title>
				<meta charset="utf-8" />
			</head>
			<body>
				${content}
			</body>
		</html>
	`);
});

app.listen(3000);












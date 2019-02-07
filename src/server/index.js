
// const express = require('express');
// const Home = require('./containers/Home');
import express from 'express';
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
	
	res.send(render(req));
});

var server = app.listen(3000);












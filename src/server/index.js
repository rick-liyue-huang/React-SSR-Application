
/* because babel-preset-stage-0 we can use es module 
const express = require('express');
const app = express();
const Home = require('./containers/Home');
*/

/*
	virtual DOM is the map of real DOM, and can transfer to string to return to client
*/

import express from 'express';
// encapsulate renders
import { render } from './utils';
// reactDOM in server
// import Home from '../containers/Home';

const app = express(); 

app.use(express.static('public'));

app.get('*', (req, res) => {

	res.send(render(req));
});

app.listen(3000, () => {
	console.log(`server listen on 3000`);
});






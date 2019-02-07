
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../Routes';

export const render = (req) => {
	const content = renderToString((
		<StaticRouter location={req.path} context={{}} >
			{Routes}
		</StaticRouter>
	));

	return `
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
	`;
}
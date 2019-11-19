
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server'; // reactdom for server
import Home from './containers/Home';

const app = express();
const content = renderToString(<Home />);

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title></title>
      </head>
      <body>
        ${content}
      </body>
    </html>
  `)
});

const server = app.listen(3000);
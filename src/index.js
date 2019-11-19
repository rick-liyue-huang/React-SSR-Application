
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server'; // reactdom for server
import Home from './containers/Home';

// csr
// react代码在浏览器上运行，消耗的是浏览器的性能
//ssr
// react代码在服务器上执行，消耗的是服务器端端的性能
// 如果为了seo 和 页面加载优化

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

PROCESS:

1. create Home/index.js, because it create react in server/node.js environment, so need require format

2. add start in package.json

3. note that: server doesnot know react, so need config package webpack

4. need target: 'node', in server.config.js
to tell it is server file

5. externals: some external module cannot be imported in bundle.js

6. 客户端渲染： react代码在浏览器上执行，消耗浏览器性能
服务器端渲染
react代码在服务器端执行，消耗服务器性能

建议： 如果不需要SEO 并且首页已经很快了，不需要ssr

同构：一套代码在客户端和服务端都执行,
服务器渲染只是发生在第一次进入页面的时候
当进入其他的界面的时候，就是浏览器端js的代码了

在服务器上开启了对跨域的支持

不能有空格
`<div id='root'>${content}</div>`

整个项目的过程
1. 服务器端运行React代码渲染出HTML
2. 发送HTML给浏览器
3. 浏览器接收到内容展示
4. 浏览器加载JS文件
5. JS中的React代码在浏览器端重新执行
6. JS中的React代码接管页面操作










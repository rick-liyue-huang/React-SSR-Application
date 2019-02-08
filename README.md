#React-SSR-Applicatioin


TTFP: 首页渲染时间过长，
SEO: 没有SEO

从0开始创建一套ssr框架

1.talk about ssr
2.build react ssr framework, 
3.在框架中如何实现同构 homogenous
4.route in framework
5.framework with redux
6.framework as middleware
7.optimization
8.webpack for style loading
9.seo optimization
10.pre-render tech

server side we use express.js in 'server',
node app.js

服务器端渲染，就是，页面的内容都在服务器端生成好了，服务器将生成好的内容传给浏览器，浏览器展示出来就好了。

客户端渲染，是网页加载js文件，js文件用来渲染页面，因为js文件在浏览器端，因此是客户端渲染。

客户端渲染优势：前端负责渲染，后端负责提供数据，适合前后端分离。
服务器端渲染：适合首页加载，加载速度快，也适合SEO，因为爬虫只认识html里面的内容，而不认JS里面的内容。
如何网页是用react写的，就无法适合爬虫，因此要用ssr。

如果开发一个项目要求首页加载很快并且服务器排名靠前，必须使用ssr，即在服务器端使用React.

客户端渲染流程：

浏览器发送请求
服务器返回html
浏览器发送bundle.js请求
服务器返回bundle.js
浏览器执行在bundle.js里面的react代码

客户端渲染流程:
浏览器发送请求
服务器运行react代码生成页面
服务器返回页面

虚拟DOM是真实DOM的一个javascript对象映射

客户端渲染：react代码在浏览器上执行，消耗的是浏览器的性能
服务器端渲染react代码在服务器上执行，消耗的是服务器端性能。

建议： 如果项目不使用SEO并且网页速度已经很快了，就不建议使用SSR。

什么是同构：
一套react代码在服务器端执行一次，在客户端再执行一次
首先将服务器端的react代码执行然后加载静态资源，静态资源一般都是放到public目录中，在.js中执行一遍react代码.

服务器端运行react代码渲染出html
发送html给浏览器
浏览器接收到内容展示
浏览器加载JS文件
js中的react代码在浏览器端重新执行
js中的react代码接管页面操作。
JS代码拿到浏览器上的地址
JS代码根据地址返回不同的路由内容

服务器端渲染只是发生在我们第一次进入页面的时候，因此再点击login不会加载任何数据。当第二次以后再点击按钮后就不是服务器端的跳转，而是JS控制的跳转，这时候都是变为客户端页面。

因此只有访问的第一个页面具有SSR，其他的都是浏览器端渲染。


1.服务器接受请求，这时候store是空的
2.componentDidMount在服务器端是不执行的，所以列表内容获取不到
3.客户端代码运行的时候就是空的
4.客户端执行componentDidMount数据被获取
5.store中的列表被更新
6.客户端渲染出store中list数据对应的列表内容。

数据的脱水和注水window.context.state









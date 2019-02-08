
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route, matchPath } from 'react-router-dom';
// import { matchRoutes } from 'react-router-config';
import routes from '../Routes';
// import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import getStore from '../store';

export const render = (store, routes, req) => {

	// const reducer = (state = {name: 'rick'}, action) => {
	// 	return state;
	// }
	// const store = createStore(reducer, applyMiddleware(thunk));
	// const store = getStore();

	// 如果在这里能够拿到异步数据，并且填充到store之中
	// store里面填充什么我们不知道，需要结合用户请求和路由做判断
	// 如果用户访问/路径，就拿Home组件
	// 如果用户访问/login, 就拿Login组件

	// 根据路由的路径来往store里面加数据
	// const matchedRoutes = [];
	// const matchedRoutes = matchRoutes(routes, req.path);
	// routes.some(route => {
	// 	const match = matchPath(req.path, route);
	// 	if(match) {
	// 		matchedRoutes.push(route);
	// 	}
	// });

	// 让matchRoutes里面所有的组件，对应的loadData方法执行一遍
	// console.log(matchedRoutes);
	/*const promises = [];
	matchedRoutes.forEach(item => {
		// console.log(item.route.loadData);
		if(item.route.loadData) {
			promises.push(item.route.loadData(store));
		}
	});*/

	// Promise.all(promises).then(() => {
		// console.log(store.getState());
		const content = renderToString((
			<Provider store={store}>
				<StaticRouter location={req.path} context={{}} >
					<div>
						{
							/*Routes*/
							routes.map(route => (
								<Route {...route} />
							))
						}
					</div>
				</StaticRouter>
			</Provider>
		));

		return`
			<html lang='en'>
				<head>
					<title>react ssr</title>
					<meta charset="utf-8" />
				</head>
				<body>
					<div id='root'>${content}</div>
					<script>
						window.context = {
							state: ${JSON.stringify(store.getState())}
						}
					</script>
					<script src="/index.js"></script>
				</body>
			</html>
		`;
	// })

	
	
	// const content = renderToString((
	// 	<Provider store={store}>
	// 		<StaticRouter location={req.path} context={{}} >
	// 			<div>
	// 				{
	// 					/*Routes*/
	// 					routes.map(route => (
	// 						<Route {...route} />
	// 					))
	// 				}
	// 			</div>
	// 		</StaticRouter>
	// 	</Provider>
	// ));

	/*return `
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
	`;*/

}
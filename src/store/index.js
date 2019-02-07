
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducer = (state = {}, action) => {
	return state;
}
// 防止单例模式
const getStore = () => {
	return createStore(reducer, applyMiddleware(thunk));
}
// const store = createStore(reducer, applyMiddleware(thunk));

export default getStore;








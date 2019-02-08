
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as homeReducer } from '../containers/Home/store';
// const reducer = (state = {}, action) => {
// 	return state;
// }
const reducer = combineReducers({
	home: homeReducer
});

// 防止单例模式
export const getStore = () => {
	return createStore(reducer, applyMiddleware(thunk));
}
export const getClientStore = () => {
	const defaultState = window.context.state;
	return createStore(reducer, defaultState, applyMiddleware(thunk));
}
// const store = createStore(reducer, applyMiddleware(thunk));

// export default getStore;








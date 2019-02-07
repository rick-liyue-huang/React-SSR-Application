
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
const getStore = () => {
	return createStore(reducer, applyMiddleware(thunk));
}
// const store = createStore(reducer, applyMiddleware(thunk));

export default getStore;








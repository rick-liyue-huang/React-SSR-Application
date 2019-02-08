
import { CHANGE_HOME_LIST } from './constants';
const defaultState = {
	name: 'rick huang',
	newsList: []
};

export default (state = defaultState, action) => {

	switch (action.type) {
		case CHANGE_HOME_LIST:
			const newState = {
				...state,
				newsList: action.list
			};
			return newState;

		default:
			return state;
	}
	
}








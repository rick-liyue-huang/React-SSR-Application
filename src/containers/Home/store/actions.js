
import axios from 'axios';
import { CHANGE_HOME_LIST } from './actionTypes';

const changeList = (list) => ({
	type: CHANGE_HOME_LIST,
	list 
});

export const getHomeList = () => {
	return (dispatch) => {
		axios.get('http://47.95.113.63/ssr/api/news.json?secret=PP87ANTIPIRATE')
			.then((res) => {
				const list = res.data.data;
				console.log(list);
				dispatch(changeList(list));
			});
	}
}







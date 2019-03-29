
import React, { Component } from 'react';
import Header from '../../components/Header';
import { connect } from 'react-redux';
import { getHomeList } from './store/actions';

class Home extends Component {
	render() {
		return (
			<div>
				<Header />
				<div>{this.props.name}</div>
				{
					this.getList()
				}
				<button onClick={() => {
					alert('click');
				}}>click</button>
			</div>
		)
	}

	getList() {
		const { list } = this.props;
		return list.map(item => <div key={item.id}>{item.title}</div>);
	}

	// only exec on client end, but NOT server end
	componentDidMount() {
		this.props.getHomeList();
	}
}

/*const Home = (props) => {
	return (
		<div>
			<Header />
			<div>{props.name}</div>
			<button onClick={() => {
				alert('click');
			}}>click</button>
		</div>
	)
}*/

const mapStateToProps = (state) => {
	return {
		name: state.home.name,
		list: state.home.newsList
	}
};

const mapDispatch = (dispatch) => {
	return {
		getHomeList() {
			console.log('test');
			dispatch(getHomeList());
		}
	}
};
export default connect(mapStateToProps, mapDispatch)(Home);


/*
	1.use const xxx = require('') and module.exports = {}
*/

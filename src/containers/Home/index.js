
import React, { Component } from 'react';
import Header from '../../components/Header';
import { connect } from 'react-redux';
import { getHomeList } from './store/actions';

/*const Home = (props) => {
	return (
		<div>
			<Header />
			<div>this is {props.name}</div>
			<button onClick={() => console.log('click')}>click</button>
		</div>
	)
};*/

class Home extends Component {
	render() {
		return (
			<div>
				<Header />
				<div>this is {this.props.name}</div>
				<button onClick={() => console.log('click')}>click</button>
			</div>
		)
	}

	componentDidMount() {
		this.props.getHomeList();
	}
}

const mapStateToProps = state => ({
	name: state.home.name
});

const mapDispatchToProps = dispatch => ({
	getHomeList() {
		// console.log('test');
		dispatch(getHomeList());
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);











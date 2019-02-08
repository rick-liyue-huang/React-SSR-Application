
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
		// console.log(this.props.list);
		return (
			<div>
				<Header />
				<div>this is {this.props.name}</div>
				{
					/*this.props.list.map((item) => {
						return <div key={item.id}>{item.title}</div>
					})*/
					this.getList()
				}
				<button onClick={() => console.log('click')}>click</button>
			</div>
		)
	}

	// 这个方法只是在客户端执行，而不会在服务端执行
	componentDidMount() {
		if(!this.props.list.length) {
			this.props.getHomeList();
		}
		
	}

	getList() {
		const { list } = this.props;
		return list.map(item => <div key={item.id}>{item.title}</div>)
	}
}

Home.loadData = (store) => {
	// 这个函数负责在服务器端渲染之前，把这个路由需要的数据提前加载好
	return store.dispatch(getHomeList());
}

const mapStateToProps = state => ({
	name: state.home.name,
	list: state.home.newsList
});

const mapDispatchToProps = dispatch => ({
	getHomeList() {
		// console.log('test');
		dispatch(getHomeList());
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);











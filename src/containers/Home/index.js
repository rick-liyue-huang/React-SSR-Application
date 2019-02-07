
import React from 'react';
import Header from '../../components/Header';

const Home = () => {
	return (
		<div>
			<Header />
			<div>good lucky</div>
			<button onClick={() => console.log('click')}>click</button>
		</div>
	)
};

export default Home;
// module.exports = {
// 	default: Home
// };

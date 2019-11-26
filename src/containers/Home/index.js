
import React from 'react';

// 同构：一套react代码在服务器和客户端都执行一次
const Home = () => {
  return (
    <div>
    <div>hello, rick</div>
    <button onClick={() => alert('click')}>Click</button>
    </div>
  ) 
}

export default Home;
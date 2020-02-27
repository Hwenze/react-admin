import React from 'react'
import Layout from './pages/Layout';
import { GlobalStyle } from './style';
import { BrowserRouter,HashRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
function App() {
  return (
    // BrowserRouter 本地测试
    <HashRouter>
      <div className="App">
        <GlobalStyle/>
        <Layout />
      </div>
    </HashRouter>
  );
}

export default App;

import 'antd/dist/antd.css';
import React from 'react';
import { HashRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import { GlobalStyle } from './style';
import './common/scss/common/base.scss';
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

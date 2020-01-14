import React from 'react'
import Layout from './pages/Layout';
import { GlobalStyle } from './style';
import 'antd/dist/antd.css';
function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Layout />
    </div>
  );
}

export default App;

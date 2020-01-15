import React from 'react'
import Layout from './pages/Layout';
import { GlobalStyle } from './style';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
function App() {
  return (
    
    <BrowserRouter>
      <div className="App">
        <GlobalStyle/>
        <Layout />
      </div>
    </BrowserRouter>
  );
}

export default App;

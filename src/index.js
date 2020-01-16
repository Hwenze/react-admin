import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
const Index = (
  <Provider store={store}>
    <App />
  </Provider>
)
ReactDOM.render(Index, document.getElementById('root'));

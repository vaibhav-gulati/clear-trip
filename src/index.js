import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/testSlice'; // Import your slice

import './index.css';
import App from './App';

const store = configureStore({
  reducer: {
    counter: counterReducer, // Add your reducer here
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

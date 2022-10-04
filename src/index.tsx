import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import reportWebVitals from './reportWebVitals';
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import swDev from './swDev'
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

swDev()

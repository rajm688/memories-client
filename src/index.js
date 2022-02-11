import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; //keeps track of the store in global state and allows us to access the store from anywhere inside the app
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducers } from "./reducers"; // importing reducer from reducer component
import App from "./App";

import "./index.css";

// creating store for redux
const store = createStore(reducers, compose(applyMiddleware(thunk)));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

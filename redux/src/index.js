// This file works starting from 20-redux-toolkit

import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

// indicate which folder to run
import App from "./25-multiple-slices/App";
import "./25-multiple-slices/index.css";
import store from "./25-multiple-slices/store/store.js";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

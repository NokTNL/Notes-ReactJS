// This file works starting from 20-redux-toolkit

import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

// indicate which folder to run
import App from "./30-class-based-components/App";
import "./30-class-based-components/index.css";
import store from "./30-class-based-components/store/index.js";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";

import App from ".//App";
import "./index.css";

// You typically wrap the app in the <Provider> component so ...
// ... the whole app can access the store
import { Provider } from "react-redux";
// also, you need to import the store (created with Redux) and pass in the store as props
import store from "./store/store.js";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

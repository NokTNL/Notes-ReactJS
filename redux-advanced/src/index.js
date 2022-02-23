import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";

// State the folder you want to run
import store from "./40-action-creator-thunk/store/index";
import App from "./40-action-creator-thunk/App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

// Choose the folder
import App from "./40-transition-component/App";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

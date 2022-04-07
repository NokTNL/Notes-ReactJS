import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./17-navlinks/index.css";

// Choose your folder
import App from "./17-navlinks/App";

ReactDOM.render(
  // Wrap the App with the BrowserRouter here to enable Router
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

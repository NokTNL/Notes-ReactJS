import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// Choose your folder
import App from "./20-params/App";
import "./20-params/index.css";

ReactDOM.render(
  // Wrap the App with the BrowserRouter here to enable Router
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

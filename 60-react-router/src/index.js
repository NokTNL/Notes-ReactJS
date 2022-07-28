import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// Choose your folder
import App from "./15-navigation/App";
import "./15-navigation/index.css";

ReactDOM.render(
  // Wrap the App with the BrowserRouter here to enable Router
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

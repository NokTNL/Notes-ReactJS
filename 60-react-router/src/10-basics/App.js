import { Route } from "react-router-dom";

import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

// See this file and index.js for basic usage

function App() {
  return (
    <div>
      {/* Inside BrowserRouter you can use <Route> */}
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/product">
        <Products />
      </Route>
      {/* Routes will be omitted if the path doesn't match any of those specified
      And you can still render other stuff outside of Routes, regardless of paths */}
    </div>
  );
}

export default App;

import { Route } from "react-router-dom";

import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>
      {/* Inside BrowserRouter you can use Route */}
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/product">
        <Products />
      </Route>
    </div>
  );
}

export default App;

import { Route, Switch } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";

// Here for <Redirect>
// Go to MainHeader.js for links

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          {/* When rendered, <Redirect> force navigates to a new URL. Can be useful e.g. if the URL does not match anything and you want to show an error page */}
          <Route path="/">
            <Redirect to="/welcome" />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component

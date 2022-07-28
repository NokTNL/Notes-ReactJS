import { Route, Switch, Redirect } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "../20-params/pages/ProductDetail";

// Here for defining params in Route path matcher
// Go to pages/ProductDetail.js for how to extract params to be used in a component

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route exact path="/welcome">
            <Welcome />
          </Route>
          {/**
           * When React Router sees ":" in the URL, the following part (until it hits another "/") will become a placeholder called PARAMS
           * ANYTHING will match a param, e.g. "/products/SISDBISDJB", then :productId = SISDBISDJB
           * If you can also have more than one params, e.g. "/:param1/:param2"
           */}
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
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

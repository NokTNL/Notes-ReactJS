import { Route, Switch } from "react-router-dom";

import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

// See this file and index.js for basic usage

function App() {
  return (
    <div>
      {/* Inside BrowserRouter you can use <Switch> and <Route> 
        - A <Switch> renders the FIRST <Route> inside it that matches the `path`, EXCLUSIVELY
        - Only the BEGINNING of the URL needs to match the path ,so "/" will match EVERYTHING
          - You can use <Route>'s `exact` prop to indicates it should match the path EXACTLY, not just the beginning
        - You should put more restricitve paths on the top to prevent matching more general paths like "/" when not intended
        - If no <Route>s match, it renders nothing
      */}
      <Switch>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/product">
          <Products />
        </Route>
      </Switch>
      {/* <Route>s put outside of a switch will be rendered whenever the path matches, INCULSIVELY, so more than one <Route> can match
        You can also render other stuff outside of <Route>s and they will be rendered regardless of paths */}
      <Route path="/">
        <footer>I am a footer!</footer>
      </Route>
    </div>
  );
}

export default App;

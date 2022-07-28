import { Route, Switch } from "react-router-dom";

import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

// See this file and index.js for basic usage

function App() {
  return (
    <div>
      {/* Inside BrowserRouter you can use <Switch> and <Route> 
        - A <Route> is essentially a conditionally rendered component, and the condition is the current URL
          - The matching mechanism uses Regex and separates the URL into chunks that are separated by "/"
          - If all chunks in the path can be found in the URL, counting from the BEGINNING, then the Route matches
            - the URL "/product" only match the path "/product" but NOT the path "/prod"
            - the URL "/welcome/" 
            - the URL "/product/book" also matches the path "/product" as only the beginning chunks need to match
            - "*" will match everything until the next character in the path matcher, like in regex
            - A path with "/" at the END has no effect, i.e. it matches EVERYTHING
              - the path "//" still need to match the first "/", so will match the URL "//abced" or "//abcdefg/12345" but NOT "/abced"
        - You can use <Route>'s `exact` prop to indicates it should match the WHOLE path, not just from the beginning
        - A <Switch> renders the FIRST <Route> inside it that matches the `path`, EXCLUSIVELY
        - You should put more restricitve paths on the top to prevent matching more general paths like "/" when not intended
        - If no <Route>s match, it renders nothing
      */}
      <Switch>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
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

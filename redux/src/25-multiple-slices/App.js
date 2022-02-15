import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";

// See store/store.js, components/Counter.js & components/Auth for using multiple slices

function App() {
  return (
    <Fragment>
      <Header />
      {<Auth />}
      <Counter />
    </Fragment>
  );
}

export default App;

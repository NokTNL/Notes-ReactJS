import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";

// See store/store.js, components/Counter.js, components/Auth, components/UserProfile for using multiple slices

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {isAuth ? <UserProfile /> : <Auth />}
      <Counter />
    </Fragment>
  );
}

export default App;

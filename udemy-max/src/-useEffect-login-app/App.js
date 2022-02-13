import React, { useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

// Here for useEffect basic use, or components/Login/Login.js for cleaning up

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Side Effects: any code not directly related to what is rendered on the UI
  // (or reacting to user input that is eventually rendered on the UI)
  // e.g. logic codes, set timers, send HTTP requests ...
  // You don't want to run these codes again automatically upon component re-evaluation

  /* useEffect(callback, [...dependecies]) */
  // The callback in useEffect is called AFTER a render
  useEffect(
    () => {
      const inLocalStorage = localStorage.getItem("isLoggedIn");

      if (inLocalStorage === "1") {
        setIsLoggedIn(true);
      }
    },
    // !! if the dependencies is OMITTED, then it will run after every re-render
    // BUT if you state the dependencies, then it will run after the FIRST render,
    // ... and will only run again when anything in the dependencies change
    // You can use an empty dependencies array if you want the code to only run once in the beginning:
    []
    // Otherwise, list in the dependencies array what VARAIBLES should trigger a new effect:
    // [isLoggin, props.something] --> such as a state variable or a prop (as they may change over time)
  );

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;

import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import Wrapper from "./components/Helpers/Wrapper";

// Every component requires returning one single parent element
// How to prevent "div soup":
// 1. Use custom wrapper components that returns props.children --> no div
// 2. Use React.Fragment component, or even shorter, <></> (but can't use keys in this)

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    // Use this:
    <Wrapper>
      {/* Or this: */}
      <>
        <AddUser onAddUser={addUserHandler} />
        <UsersList users={usersList} />
      </>
    </Wrapper>
  );
}

export default App;

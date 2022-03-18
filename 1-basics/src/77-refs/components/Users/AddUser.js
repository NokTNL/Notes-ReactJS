import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  // setting the state on every keystork (and re-rendering) is redundant when you only need the input on submission
  // Here, store the MUTABLE ref object returned from useRef() first
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    // Take the values out from the ref.current
    const submittedName = nameInputRef.current.value;
    const submittedAge = ageInputRef.current.value;

    if (submittedName.trim().length === 0 || submittedAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+submittedAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(submittedName, submittedAge);
    // You can MUTATE the value here without setting the state (doesn't mean you SHOULD do that)
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const usernameChangeHandler = (event) => {
    // setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    // setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // value={enteredUsername}
            onChange={usernameChangeHandler}
            // register your ref in any HTML element. The DOM node of this element ...
            // ... will be assigned to nameInputRef.current BY REFERENCE
            // !! the value is decoupled from states so it turns the component into UNCONTROLLED
            // ... (i.e. changes are not handled by React anymore, but by native browser mechanism instead (i.e. value stored in the input field))
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // value={enteredAge}
            onChange={ageChangeHandler}
            // Also here
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;

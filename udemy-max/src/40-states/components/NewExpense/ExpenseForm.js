import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // Update states on user input
  //
  // METHOD 1: set inidividual states (preferred)
  const [enteredTitle, setEnteredTitle] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    console.log(enteredTitle); // !! Note that this will lag behind as always
  };

  // METHOD 2: Use one states + Spread operator to copy the remaning inputs (that are not changed)
  // !! This depends on the previous state. To ensure you use the latest state, we may use the trick mentioned below:

  const [userInput, setUserInput] = useState({
    enteredDate: "",
    enteredAmount: "",
  });

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      /* How to update from PREVIOUS STATE properly in one event handlers*/
      // Sometimes we update states multiple times in one event handler, or even across multiple components.
      // It is tempting to use (...) to copy from the state variable returned by useState(),
      // ... then put it inside setState () to update the state, BUT ...
      // ... if the state has been modified somewhere else, you can't gurantee to have the latest state.
      // This is becuase React BATCHES multiple setState requests for perfermonace. This reduce the frequency of re-rendering.
      // !!! Especially, all setState()'s in one event handler won't be handled until the handler call is finished!!!
      // !!! React do not batch setState requests across INTENTIONAL EVENTS, like clicks. Each clicks are handled separately.
      // The safest approach: pass an UPDATER FUNCTION inside the setState function. The MOST CURRENT PREVIOUS STATE will be passed into the callback:
      return {
        ...prevState, // To copy all the previous values
        enteredAmount: event.target.value, // Change this to the new one. If only pass in this to setUserInput, the ...
        // ... remaining inputs are lost
        // Naming convention of updater function: https://beta.reactjs.org/learn/queueing-a-series-of-state-updates#naming-conventions
      };
    });
    console.log(userInput);
  };

  const dateChangeHandler = (event) => {
    setUserInput({
      ...userInput, // To copy all the previous values
      enteredDate: event.target.value,
    });
    console.log(userInput);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

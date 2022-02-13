import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  // Process data whenver they are TYPED in the form (before submission)
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("0.00");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  // Handle form submission
  const submitHandler = (event) => {
    event.preventDefault(); // Prevent form from reloading
    // The "entered" values are ALREADY updated because of the onChange handlers above
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount, // To enforce number conversion
      date: new Date(enteredDate),
    };
    /* Use the "event handler" passed in as props, feed in data as parameters to pass them upwards
    This is only READING the props so it is allowed in React */
    props.onSaveExpenseData(expenseData);
    //
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  // ?? Can't we just make one single form submit handler to assign all new values?

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
          {/* Two-way binding for the value:
          - initial value = "", set by useState
          - input changed --> set states for title --> form value updated */}
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
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

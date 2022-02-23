import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import { useState } from "react";

function ExpenseItem(props) {
  // React elements are 'immutable'. This does not results in changes of what is displayed:
  // props.title = "Updated";
  // even though if you called console.log(props.title), it will show "Updated"
  //
  // Instead we use ---
  //
  // useState(initial-state):
  // - the first time it is called, creates a new "state variable" internally that can be changed over time & re-rendered
  // - next time it is called, only returns its current state (no new creation)
  // - the created state variable remains beyond function calls
  //
  // returns an array [state, setState]:
  // - state = the current state, PASSED BY VALUE
  // - setState(newValue) = a function that updates the state
  const [title, setTitle] = useState(props.expenses.title); // Destructuring assignment
  // --> When the component is called again (after setTitle() is called), a new current state will be returned
  // 'title' can be const because it DOES NOT PERSIST beyond function calls, it is just a copy of the state value
  // !! A separate "State variable" is registered in each ExpenseItem instance
  // !! useState() can only be called INSIDE a COMPONENT

  const {
    expenses: { date, /* title, */ amount },
  } = props;

  const clickHandler = () => {
    setTitle("Updated"); // When setTitle() is called, the WHOLE COMPONENT function will be called again (and re-rendered)
    console.log(title); // ?? it will show the ORIGINAL TITLE becuase the new state is re-rendered AFTER this clickHandler() call is finished
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      {/* Add a "click" event handler to change the title */}
      <button onClick={clickHandler}>Change Title</button>
      {/* If changed to clickHandler(), it will be exceuted when COMPILED --> "clicked" 4 times */}
    </Card>
  );
}

export default ExpenseItem;

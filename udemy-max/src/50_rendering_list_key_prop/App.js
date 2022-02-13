import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

/** Details in this file & components/Expenses.js (esp. for the "key" prop) */

// Contains all initial exmaple expenses
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  /* an event handler for receiving data from children */
  const addExpenseHandler = (newExpense) => {
    setExpenses((prevState) => {
      return [newExpense, ...prevState]; // new expense at the top
    });
    console.log(`In App.js, added new expense:`);
    console.log(newExpense);
  };

  return (
    <div>
      {/* Pass down a "custom event handeler props" for receiving data  */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;

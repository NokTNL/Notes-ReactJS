import React from "react";
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

/* Also, Go to components/NewExpense/NewExpense.js & components/NewExpense/ExpenseForm.js for details*/

function App() {
  const expenses = [
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

  /* an event handler for receiving data from children */
  const addExpenseHandler = (newExpense) => {
    console.log(`In App.js`);
    console.log(newExpense); // Not yet learned how to CHANGE the "expenses" array here yet, so just log it
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

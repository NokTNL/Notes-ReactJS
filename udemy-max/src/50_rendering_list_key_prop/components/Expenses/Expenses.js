import "./Expenses.css";
import ExpenseItem from "./ExpenseItem"; // Sub-components to import
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

import { useState } from "react";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("");
  console.log(`In Expenses.js, selected year to filter: \n${filterYear}`);

  const filterSelectHandler = (newYear) => {
    setFilterYear(newYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          filterYear={filterYear}
          onFilterSelection={filterSelectHandler}
        />
        {/* JSX will render an array into side-by-side elements */}
        {props.expenses.map(
          //
          (expense) => (
            <ExpenseItem
              // "key" prop:
              // - When a state is updated, React will scan through the whole component to see what has to be updated
              // - We intentionally insert the new expense item at the top of the expense list (See App.js)
              // - React does not know which item has to be updated, so it re-renders the WHOLE LIST, ...
              // ... which has performance issue and may potentially lead to bugs because it may wipe out state changes in the irrelevant components
              // - That's why we should assign a unique "key" prop in each component for React to identify which component to update
              key={expense.id}
              expense={expense}
            />
          )
          //
        )}
      </Card>
    </div>
  );
}

export default Expenses;

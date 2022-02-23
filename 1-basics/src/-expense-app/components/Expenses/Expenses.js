import "./Expenses.css";
import ExpenseItem from "./ExpenseItem"; // Sub-components to import
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

import { useState } from "react";
import Chart from "../Chart/Chart";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("");

  const onFilterSelection = (newYear) => {
    // Save the selected year passed up from <ExpenseFilter />
    setFilterYear(newYear);
  };

  // Generate a subset of the expenses array based on the "filterYear" state
  const filteredExpenses =
    // Non-empty filter
    filterYear
      ? props.expenses.filter(
          (expense) => expense.date.getFullYear().toString() === filterYear
        )
      : // Empty filter (""): show all
        props.expenses;

  return (
    <div>
      <Card className="expenses">
        <Chart filteredExpenses={filteredExpenses} filterYear={filterYear} />
        <ExpensesFilter
          // Two-way binding
          filterYear={filterYear}
          onFilterSelection={onFilterSelection}
        />

        {filteredExpenses.map(
          //
          (expense) => (
            <ExpenseItem //
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

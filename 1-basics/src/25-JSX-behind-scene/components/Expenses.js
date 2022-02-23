import ExpenseItem from "./ExpenseItem"; // Sub-components to import
import "./Expenses.css";
import Card from "./Card";

function Expenses({ expenses }) {
  return (
    // See ExpenseItems.js & Card.js for more explanantion
    <Card className="expenses">
      <ExpenseItem expenses={expenses[0]} />
      <ExpenseItem expenses={expenses[1]} />
      <ExpenseItem expenses={expenses[2]} />
      <ExpenseItem expenses={expenses[3]} />
    </Card>
  );
}

export default Expenses;

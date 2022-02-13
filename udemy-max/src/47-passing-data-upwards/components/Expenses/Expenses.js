import ExpenseItem from "./ExpenseItem"; // Sub-components to import
import "./Expenses.css";
import Card from "../UI/Card";

function Expenses({ expenses }) {
  return (
    <Card className="expenses">
      <ExpenseItem expenses={expenses[0]} />
      <ExpenseItem expenses={expenses[1]} />
      <ExpenseItem expenses={expenses[2]} />
      <ExpenseItem expenses={expenses[3]} />
    </Card>
  );
}

export default Expenses;

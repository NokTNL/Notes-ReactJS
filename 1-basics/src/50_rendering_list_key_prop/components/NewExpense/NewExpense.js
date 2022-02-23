import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  /* an event handler for receiving data from children */
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseDataWIthId = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseDataWIthId);
  };

  return (
    <div className="new-expense">
      {/* Pass down a "custom event handeler props" for receiving data  
          ?? is it passed BY REFERENCE? */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />{" "}
    </div>
  );
};

export default NewExpense;

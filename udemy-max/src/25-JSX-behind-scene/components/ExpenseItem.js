import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "./Card";

function ExpenseItem({ expenses: { date, title, amount } }) {
  return (
    // How to wrap content inside a custom compenent:
    <Card className="expense-item">
      {/* ^ It is NOT a CSS class, but passed in as props.className = "expense-item" */}
      {/* ----------------------------------------------------------------> These are passed into card ...*/}
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      {/* ---------------------------------------------------------> ... as "props.children", automatically */}
    </Card>
  );
}

export default ExpenseItem;

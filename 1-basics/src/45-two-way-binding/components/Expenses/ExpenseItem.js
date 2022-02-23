import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import { useState } from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.expenses.title);

  const {
    expenses: { date, amount },
  } = props;

  const clickHandler = () => {
    setTitle("Updated");
    console.log(title);
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

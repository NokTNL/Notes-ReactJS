import "./ExpenseItem.css"; // Convention: matching the CSS of that element with the component name

function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = "New title";
  const expensePrice = 200;

  // You can assign JSX to a variable, too:
  // !! This is NOT a component because it is not a function.
  const expensePriceJSX = (
    <div className="expense-item__price">${expensePrice}</div>
  );

  return (
    // class -> className in JSX */
    <div className="expense-item">
      {/* Use {} around variables in JSX */}
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        {expensePriceJSX}
      </div>
    </div>
  );

  // JSX will be compiled into React.createElement() calls before passing to the browser: https://reactjs.org/docs/introducing-jsx.html#jsx-represents-objects
}

export default ExpenseItem;

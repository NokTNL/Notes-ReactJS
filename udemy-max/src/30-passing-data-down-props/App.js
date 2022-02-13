import ExpenseItem from "./components/ExpenseItem";

function App() {
  // A list of expense entries, in an object-array
  const expense = [
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
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        // These are 'props'. Looks like attributes of HTML tags, but in JSX:
        // <Component myprop=""> --> tag starts with Upper-Case, this is a prop of the component, passed in as props.myprop
        // <tag myAttribute=""> --> tag starts with lower-case, this will be TRANSPILED to an HTML tag attribute
        //    - You need to turn the attribute into UpperCamelCase to transpile correctly
        //    - Exception: class --> className
        //    - more on this: https://reactjs.org/docs/dom-elements.html
        //
        // !! Event handlers: also looks like HTML event handlers, but compare:
        //    - HTML: <button onclick="(JS code)">  --> the JS code is RUN on triggered event, nothing passed in
        //    - React: <button onClick={JShandler}>  --> the handler is CALLED with the EVENT object passed in (more like addEventListener)
        //    - more on this: https://reactjs.org/docs/events.html
        //
        // props of components will be structured into an object (key-value pairs), then passed to the component function
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      />
    </div>
  );
}

export default App;

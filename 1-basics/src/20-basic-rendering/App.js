import ExpenseItem from "./components/ExpenseItem"; // Sub-components to import

// Every component inside React is a FUNCTION that returns JSX
function App() {
  return (
    // The below is the start of JSX. It will be transpiled back to JS by React before
    // reaching the browser
    // () around the JSX is needed if it is multiline
    <div>
      <h2>Let's get Started!</h2>
      {/* This is the way to inclues Components in JSX. Tags beginnning with UpperCase is recognised as Components.
      if the Component is called ExpenseItem, putting it inside another JSX it will be called as: */}
      <ExpenseItem />
      {/* Or <Name>Content</Name> if it has child nodes inside*/}
    </div>
    // See ExpenseItems.js for the content of the ExpenseItem component
  );
}

// !! Don't forget this!
export default App; // So that it can be imported by App.js

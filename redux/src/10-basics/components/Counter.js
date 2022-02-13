import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  // useSelector: when the state is updated, the callback passed in (called the "selector") is called
  // The callback receives the state object from the store, and returns whatever you want it to return
  // Usually you select the things you want to return with this, hence called "selector"
  const counter = useSelector((state) => state.counter); // returns the "counter" prop of the state
  // when the state is updated, a functional component with the useSelector hook will be called again ...
  // ... which in turn will update the counter value
  // !! useSelector also subscribes the store for you
  const showCounter = useSelector((state) => state.showCounter);

  // useDispatch: returns a FUNCTION that let you to dispatch function
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/store";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const dispatch = useDispatch();

  // call the slice action-creating methods to return an action object
  const handleIncrement = () => {
    dispatch(counterActions.increment());
    // !! Don't forget the () after the method!
    // counterActions.increment() will return { type: "counter/increment" }, for example
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  // If you need to pass in a payload, just pass it in as an argument:
  const handleIncrease = () => {
    dispatch(counterActions.increase(5));
    // counterActions.increase(5) will return { type: "counter/increase", payload: 5 }
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrease}>Increase by 5</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

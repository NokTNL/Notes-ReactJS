import { useSelector, useDispatch, connect } from "react-redux";
import { Component } from "react";

import classes from "./Counter.module.css";

// const Counter = () => {
//   const dispatch = useDispatch();
//   const counter = useSelector(state => state.counter);

//   const incrementHandler = () => {
//     dispatch({ type: 'increment' });
//   };

//   const decrementHandler = () => {
//     dispatch({ type: 'decrement' });
//   };

//   const toggleCounterHandler = () => {};

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{counter}</div>
//       <div>
//         <button onClick={incrementHandler}>Increment</button>
//         <button onClick={decrementHandler}>Decrement</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

// export default Counter;

class Counter extends Component {
  incrementHandler() {
    this.props.increment();
  }

  decrementHandler() {
    this.props.decrement();
  }
  increaseHandler() {
    this.props.increase(5);
  }

  toggleCounterHandler() {}

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
          <button onClick={this.increaseHandler.bind(this)}>
            Increase by 5
          </button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

/**
 * mapStateToProps extract redux state to component's props, just like `useSelector`
 */
const mapStateToProps = (state) => {
  //                      ^ recieves state from Redux
  return {
    counter: state.counter,
    //       ^ extract from Redux state
    //^ assign to a new prop called `this.counter` to the component
  };
};

/**
 * mapDispatchToProps assign ACTION CREATORS to the component as props, in place of `useDispatch`
 */

const mapDispatchToProps = (dispatch) => {
  //                        ^ recieves the dispatch function from Redux
  return {
    //v each of the following is an action creator that will be availble as props
    increment: () => dispatch({ type: "increment" }),
    decrement: () => dispatch({ type: "decrement" }),
    increase: (amount) => dispatch({ type: "increase", payload: amount }),
  };
};

/**
 * To subscribe a class-based component to the reduc store, you can't use hooks and need to use "connect" from react-redux to MODIFY the component
 * `connect` works for both functional & class components
 * - You first need to tell connect what the component WILL USE and what the ACTIONS the component can dispatch, both included as the component's props
 *                                                 (mapStateToProps)    (mapDispatchToProps)
 *    - To do that, pass in two helper functions into `connect` and it will call them for you
 *
 * - `connect()` RETURNS ANOTHER function that you can pass the component in to connect it to Redux
 * - It returns the modified component that you can export
 */

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

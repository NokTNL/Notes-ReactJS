/** Setting up */

// Use Node.js syntax to import redux
const redux = require("redux");

// Reducers: responsible for returning a new state
// !! Reducers must be:
// - pure (receive old state + dispatched action as input, returns a new state object), including:
// - No side effects (e.g. sending HTTP requests)
// !! Using state mutating code will still work though (but not recommended)
// It is also responsible for setting an INITIAL STATE, so remember to set a default state (e.g. key-value pairs as an object):
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  } else return state;
};

// A "store" is an object tree that stores the global state
// pass in the reducer to store.createStore()
// this will:
// 1. set the reducer function of the store
// 2. call the reducer once and returns the default INITIAL STATE, which is stored inside the store (privately)
const store = redux.createStore(counterReducer);
// A store's API is { subscribe, dispatch, getState }

/** Using the store API */

// To get the present state, use store.getState:
console.log(store.getState()); // {counter: 1}

// store.subscribe: pass in a callback that will be called whenever the state in "store" changes
// !! You don't usually use the subscribe function directly. Instead use something like React
store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch: dispatch an ACTION that tells the reducer to mutate state
// an action is an OBJECT that must contain a "type" property (and optionally a "payload" property)
store.dispatch({ type: "increment" });

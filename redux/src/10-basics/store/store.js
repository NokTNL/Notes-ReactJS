import { createStore } from "redux";

const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + 1 };
    case "decrement":
      return { ...state, counter: state.counter - 1 };
    case "toggle": {
      return { ...state, showCounter: !state.showCounter };
    }
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;

// React Redux will handle subcribe and dispatch for us
/* 
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch("increment");
store.dispatch("decrement");
 */

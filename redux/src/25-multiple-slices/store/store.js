import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// Add another slice for authentication here
const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// Slices merged into one
const store = configureStore({
  reducer: {
    // !! Note that now you specifies more than one slices, the state will be grouped into:
    /*
    state === {
      counter: { counter: 0, showCounter: true }
      auth: { isAuthenticated: false }
    }
    */
    // Grouped into the keys specified below
    // This is called a "reducer map"
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;

// Export action-creating methods from all slices
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

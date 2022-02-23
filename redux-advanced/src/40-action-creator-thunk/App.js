// See store/cart-slice.js for action creator thunks, here on how to use it

import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

// import the thunk
import { sendCartData } from "./store/cart-slice";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  // You need useEffect to listen to state changes
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    // !! call the thunk inside dispatch() to return a FUNCTION
    // When a useDispatch dispatch function receives a function as the argument (instead of an action object), ...
    // ... dispatch will call that function for you and pass in the store's (dispatch, getState) methods as arguments
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;

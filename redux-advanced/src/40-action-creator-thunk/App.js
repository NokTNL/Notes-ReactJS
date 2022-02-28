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

  // Here it uses useEffect to listen to state changes
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    // Call the thunk inside dispatch similar to an action creator
    // But instead of returning an action obejct, it returns a FUNCTION
    // When a useDispatch-returned function receives a function as the argument, (configureStore enables the react-thunk middleware for you) ...
    // ... it will call that function and pass in the store's (dispatch, getState) methods as that function's arguments
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

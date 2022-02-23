import { useEffect } from "react";
import { useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  // Reducer must be PURE and cannot handle async code on new actions
  // So we need to listens to changes in the Redux state in a component and use useEffect for async code
  // Note that a fat reducer has done all data pre-processing prioir to sending to the server
  // See store/cart-slice.js
  const cart = useSelector((state) => state.cart);

  // And when the "cart" state changes, this Hook will be triggered
  useEffect(
    // !!! DON'T put "async" here!! it will return a Promise to useEffect but useEffect only accepts function or mull return
    () => {
      (async () => {
        const response = await fetch(
          "https://react-http-6b4a6.firebaseio.com/cart.json",
          {
            // "PUT" method overwrites existing data in Firebase
            method: "PUT",
            body: JSON.stringify(cart),
          }
        );

        if (!response.ok) {
          throw new Error("Sending cart data failed");
        }

        const data = response.json();
      })();
    },
    [cart]
  );

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;

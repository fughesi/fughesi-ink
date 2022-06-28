import React, { useState, useEffect } from "react";
import "./ShoppingCartPage.css";

export default function ShoppingCartPage({ blur, cart }) {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart") || 0)
  ); // start with all items in cart---------------------------

  // retrieve "cart" items from local storage if state variable cart updates -----
  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem("cart")));
  }, [cart]);

  //  loop through cart and add all fees, save total as "sum"--------
  let sum = 0;
  for (let item of cartItems) {
    sum += item.fee;
  }

  // ##################### RETURN ##################
  return (
    <main className="shoppingCartMain">
      <section
        className="shoppingCartHead"
        aria-label="title with subtotal and count"
      >
        <div className="shoppingCartTitle">Shopping Cart</div>
        <div>
          total items: ({cartItems ? cartItems.length : 0})
          <br />
          subtotal: $ {sum.toFixed(2)}
        </div>
      </section>

      <div className="stuff">
        {/* stuff will go here */}
      </div>
    </main>
  );
}

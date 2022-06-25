import React, { useState, useEffect } from "react";
import "./ShoppingCartPage.css";

export default function ShoppingCartPage({ blur, cart }) {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart"))
  );

  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem("cart")));
  }, [cart]);

  for (const item of cartItems) {
    console.log(item.fee);
  }
  return (
    <main className="shoppingCartMain">
      <section className="shoppingCartGrid" aria-label="shopping cart grid">
        <div className="shoppingCartTitle">Shopping Cart</div>
        <div>total items: ({cartItems ? cartItems.length : 0})</div>
        {/* <div>subtotal: {cartItems.fee.reduce()}</div> */}
      </section>
    </main>
  );
}

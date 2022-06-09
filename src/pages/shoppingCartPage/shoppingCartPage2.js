import React, { useState } from "react";
import "./ShoppingCartPage.css";

export default function shoppingCartPage2() {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  //   const stuff =fetch("./../../JSON/Data.js")
  //     .then((res) => res.JSON)
  //     .then((data) => localStorage.setItem("things", JSON.stringify(data)));

  function addToCart() {
      let x = JSON.parse(cart)
    if (x) {
    setCart((x) => localStorage.setItem("cart", JSON.stringify(x)));
    } else if(!x) {
      setCart(localStorage.setItem("cart", JSON.stringify(x)));
    }
  }
  return (
    <>
      <div>{products}</div>
      <div>
        <button className="addToCart" onClick={addToCart}></button>
        {cart}
      </div>
    </>
  );
}

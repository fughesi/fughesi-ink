import React, { useState } from "react";
import Cart from "../../images/Icons/Cart";
import "./ShoppingCart.css";

export default function ShoppingCart() {
  // state variables
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) ||
      localStorage.setItem("products", "{}")
  );
  const [buggy, setBuggy] = useState(
    JSON.parse(localStorage.getItem("buggy")) ||
      localStorage.setItem("buggy", "[]")
  );

  function addToCart() {
    console.log("addToCart");
  }

  return (
    <div className="shoppingCartContainer">
      <div className="shoppingCartDiv" onClick={addToCart}>
        <Cart width="100%" />
      </div>
    </div>
  );
}

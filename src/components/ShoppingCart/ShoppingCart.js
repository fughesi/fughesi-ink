import React, { useState } from "react";
import Cart from "../../images/Icons/Cart";
import "./ShoppingCart.css";

export default function ShoppingCart({ id }) {
  // state variables
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) ||
      localStorage.setItem("products", "{}")
  );
  const [buggy, setBuggy] = useState(
    JSON.parse(localStorage.getItem("buggy")) ||
      localStorage.setItem("buggy", "[]")
  );

  function addToCart(productId) {
    console.log(productId);
    let product = products.find(function (product) {
      return product.id == productId;
    });
    if (buggy.length == 0) {
      buggy.push(product);
    } else {
      let res = buggy.find((element) => element.id == productId);
      if (res === undefined) {
        buggy.push(product);
      }
    }
    setBuggy(localStorage.setItem("buggy", JSON.stringify(buggy)))
  }

  return (
    <div className="shoppingCartContainer">
      <div className="shoppingCartDiv" onClick={(id)=>addToCart()}>
        <Cart width="100%" />
      </div>
    </div>
  );
}

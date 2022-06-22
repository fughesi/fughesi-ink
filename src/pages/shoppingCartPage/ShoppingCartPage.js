import React, { useState, useEffect } from "react";
import products from "../../JSON/deletethis";
import BlackHistory from "../../JSON/__photoJSON";
import "./ShoppingCartPage.css";

export default function ShoppingCartPage({ blur }) {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  function locallyStoreCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  useEffect(() => {
    locallyStoreCart();
  }, [cart]);


  return (
    <section aria-label="shopping cart" className="shoppingCartGrid">
      <h1>Products</h1>
      {products.map((product, index) => (
        <>
          <div className="productsDiv">
            <h3>{product.name}</h3>
            <h4>$ {product.price}</h4>
            <img src={product.image} alt={product.name} key={index} />
            <button
              onClick={() => {
                addToCart(product);
              }}
            >
              Add to cart {cart.length}
            </button>
          </div>
        </>
      ))}
    </section>
  );
}

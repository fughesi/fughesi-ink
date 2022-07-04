import React, { useState, useEffect } from "react";
import "./ShoppingCartPage.css";

export default function ShoppingCartPage({ blur, cart }) {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart") || [])
  );

  // console.log(Object.values(cartItems).map((i)=>{name}))

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
      <header
        className="shoppingCartHead"
        aria-label="title with subtotal and count"
      >
        <div className="shoppingCartTitle">
          <h3 className="shoppingCart">Shopping Cart</h3>
        </div>
        <div>
          total items: ({cartItems ? cartItems.length : 0})
          <br />
          subtotal: <span className="moneySign">$</span>
          {sum.toFixed(2)}
        </div>
      </header>

      <section className="shoppingCartItems" aria-label="items in the cart">
        <h3>Cart Items</h3>
        {cart ? (
          [...new Map(cartItems.map((i) => [i["name"], i])).values()].map(
            (i) => {
              return (
                <div>
                  <img src={i.src} alt={i.alt} width={50} />
                  <p>{i.name}</p>
                </div>
              );
            }
          )
        ) : (
          <p>no items in cart</p>
        )}
      </section>
      <aside
        className="shoppingCartSidebar"
        aria-label="add and remove items in cart"
      >
        <h3>Totals</h3>
        {/* {cart ? 
        [...new Map(cartItems.map((i)=>{ 
          return(i["name"],i.fee)
        }))].reduce((x,y)=>{x +=y}) : ""
      } */}
        
      </aside>
    </main>
  );
}

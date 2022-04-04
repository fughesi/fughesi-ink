import React, { useState } from "react";
import PayPal from "../PayPal/PayPal";
import "./Checkout.css";

export default function Checkout() {
  const [checkout, setCheckout] = useState(false);
  return (
    <div className="checkoutMain">
      {checkout ? (
        <PayPal />
      ) : (
        <button onClick={() => setCheckout(true)}>PayPal</button>
      )}
    </div>
  );
}

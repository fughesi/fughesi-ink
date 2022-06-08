import React from "react";
import "./Products.css";

export default function Products(props) {
  const { products, onAdd } = props;
  return (
    <>
      <div>
        <img src={products.image} alt={products.name} className="imgSmall" />
        <h4>{products.name}</h4>
        <p>{products.price}</p>
      </div>

      <div>
        <button onClick={onAdd} className="prodBTN"></button>
      </div>
    </>
  );
}

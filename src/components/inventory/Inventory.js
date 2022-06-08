import React from "react";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import "./Inventory.css";

export default function Inventory({ images }) {
  const inventory = images.map((i) => {
    return (
      <div className="inventoryCards">
        <Link to={i.link}>
          <img
            src={i.src}
            alt={i.alt}
            key={nanoid()}
            className="carouselLinks"
          />
        </Link>
        {/* <p>{i.name}</p>
        <p>
          <span className="quantity">{i.quantity}</span> items
        </p> */}
      </div>
    );
  });
  return <div className="inventory">{inventory}</div>;
}

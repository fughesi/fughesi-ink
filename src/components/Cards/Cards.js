import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

export default function Cards() {
  return (
    <section className="boxes" aria-labelledby="informational cards">
      <div className="card">
        <h3>Select a Graphic</h3>
        <p>
          Hundreds of choices available under our{" "}
          <strong>
            {" "}
            <Link to="/graphics">Graphics</Link>
          </strong>{" "}
          tab!
        </p>
      </div>
      <div className="card">
        <h3>Select a Shirt</h3>
        <p className="cardslistUL">
          Two available options:
        </p>
          <ul className="cardsList">
            <li>100% ring-spun cotton</li>
            <li>Tri-blend premium</li>
          </ul>
      </div>
      <div className="card">
        <h3>Lorem</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
          quaerat!
        </p>
      </div>
      <div className="card">
        <h3>Lorem</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
          quaerat!
        </p>
      </div>
    </section>
  );
}

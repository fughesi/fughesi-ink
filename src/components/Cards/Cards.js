import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

export default function Cards() {
  return (
    <section className="boxes" aria-labelledby="informational cards">
      <div className="card">
        <h3>Select a Graphic</h3>
        <p>
          There are hundreds of graphics available under our{" "}
          <strong>
            {" "}
            <Link to="/graphics">Graphics</Link>
          </strong>{" "}
          tab!
        </p>
      </div>
      <div className="card">
        <h3>Select a Shirt</h3>
        <p>
          Two available options:
          <ul className="cardsList">
            <li>100% ring-spun cotton (loose fitted)</li>
            <li>
              tri-blend premium (50% poly, 25% cotton, 25% algon) (form fitted)
            </li>
          </ul>
        </p>
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

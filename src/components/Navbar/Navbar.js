import React from "react";
import { Link } from "react-router-dom"
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="mainNav">
      <ul>
        <li>
        <Link to="/">Home</Link> 
        </li>
        <li>
        <Link to="/about">About</Link> 
        </li>
        <li>
          <Link to="/graphics">Graphics</Link>

        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

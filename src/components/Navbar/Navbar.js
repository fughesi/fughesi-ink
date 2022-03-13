import React from "react";
import { Link } from "react-router-dom"
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="mainNav">
      <ul>
        <li>
        <Link to="/">Home</Link> 
          {/* <a href="#">Home</a> */}
        </li>
        <li>
        <Link to="/about">About</Link> 
          {/* <a href={About}>About</a> */}
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

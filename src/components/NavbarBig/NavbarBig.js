import React from "react";
import { Link } from "react-router-dom";
import MonkeyHead from "./../../images/portraits/monkeyFace3D.png";
import "./NavbarBig.css";

export default function Navbar() {
  return (
    <nav className="mainNav">
      <div className="navDiv">
        <Link to="/">
          <h3 className="fughesiInk">FUGHESI Ink</h3>
        </Link>

        <ul className="navBigUL">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/graphics">GRAPHICS</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
      <img src={MonkeyHead} alt="logo" height="70%" />
    </nav>
  );
}

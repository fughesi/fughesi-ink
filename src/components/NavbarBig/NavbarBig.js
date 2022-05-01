import React from "react";
import { Link } from "react-router-dom";
import MonkeyHead from "./../../images/portraits/monkeyFace3D.png";
import Etsy from "./../../images/Icons/etsy";
import FB from "./../../images/Icons/FB2";
import IG from "./../../images/Icons/IG2";
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
      <a
        href="https://www.facebook.com/fughesiInk"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Etsy height="25" className="etsy socials" />
      </a>
      <a
        href="https://www.facebook.com/fughesiInk"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FB height="25" className="FB2 socials" />
      </a>

      <a
        href="https://www.facebook.com/fughesiInk"
        target="_blank"
        rel="noreferrer noopener"
      >
        <IG height="25" className="IG2 socials" />
      </a>
      <img src={MonkeyHead} alt="logo" height="70%" />
    </nav>
  );
}

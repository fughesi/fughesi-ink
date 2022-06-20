import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./../../resources/logos/MonkeyHead";
import "./Navbar.css";

export default function Navbar({ handleClick }) {
  // state variables
  const [hideNav, setHideNav] = useState(false);

  function operateNav() {
    return setHideNav((i) => !i);
  }

  return (
    <nav className="navbarNav">
      <div className="navbar">
        {/* ----------flyout menu --------- */}
        <div
          className={hideNav ? "hamburgerMain" : "hamburgerMain closed"}
          onClick={operateNav}
        >
          <Link to="/" className="flyoutLink">
            HOME
          </Link>
          <Link to="/Inventory" className="flyoutLink">
            GRAPHICS
          </Link>
          <Link to="/FAQ" className="flyoutLink">
            FAQ
          </Link>
          <Link to="/Contact" className="flyoutLink">
            CONTACT
          </Link>
          <p className="smallText">*click anywhere to close</p>
        </div>
        {/* ---------clickbox to activate function -------------- */}
        <div
          className="hamburgerClickBox"
          onClick={() => (operateNav(), handleClick)}
        ></div>
        {/* ---------hamburger bars ------------- */}
        <div>
          <div className="hamburger"></div>
          <div className="hamburger"></div>
        </div>

        <Link to="/">
          <h3>FUGHESI ink</h3>
        </Link>
        <div className="logo">
          <Logo className="logoSVG" />
        </div>
      </div>
      <div className="blurBottonNav"></div>
    </nav>
  );
}

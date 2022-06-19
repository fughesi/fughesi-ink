import React from "react";
import "./FooterMobile.css";
import Cart from "./../../resources/icons/Cart";
import CC from "./../../resources/icons/CC";
import Back from "./../../resources/icons/Back";
import DarkMode from "./../darkMode/DarkMode";
import { Link } from "react-router-dom";

export default function FooterMobile({ darkmode, setMode }) {
  return (
    <div className="footer">
      <Link to="/Inventory" className="navLinks">
        <Back  className="footerSVG" />
      </Link>
      <Link to="/Inventory" className="navLinks">
        <CC  className="footerSVG" />
      </Link>
      <Link to="/Inventory" className="navLinks">
        <Cart  className="footerSVG" />
      </Link>
      <DarkMode darkmode={darkmode} setMode={setMode} className="navLinks" />
    </div>
  );
}

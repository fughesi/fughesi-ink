import React from "react";
import history from "history/browser";
import "./FooterMobile.css";
import Cart from "./../../resources/icons/Cart";
import CC from "./../../resources/icons/CC";
import Back from "./../../resources/icons/Back";
import DarkMode from "./../darkMode/DarkMode";
import { Link } from "react-router-dom";

export default function FooterMobile({ darkmode, setMode }) {
  return (
    <div className="footer">
      <div onClick={history.back}>
        <Back className="footerSVG" />
      </div>
      <Link to="/Inventory" className="navLinks">
        <CC className="footerSVG" />
      </Link>
      <Link to="/ShoppingCart" className="navLinks">
        <Cart className="footerSVG" />
      </Link>
      <DarkMode darkmode={darkmode} setMode={setMode} className="navLinks" />
    </div>
  );
}

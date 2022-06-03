import React from "react";
import "./FooterMobile.css";
import Cart from "./../../resources/icons/Cart";
import CC from "./../../resources/icons/CC";
import Tshirt from "./../../resources/icons/Tshirt";
import Back from "./../../resources/icons/Back";
import DarkMode from "./../darkMode/DarkMode";
import { Link } from "react-router-dom";

export default function FooterMobile({ darkmode, setMode }) {
  return (
    <div className="footer">
      <Link to="/Inventory" className="navLinks">
        <Back width={25} />
      </Link>
      <Link to="/Inventory" className="navLinks">
        <CC width={25} />
      </Link>
      <Link to="/Inventory" className="navLinks">
        <Cart width={25} />
      </Link>
      <DarkMode darkmode={darkmode} setMode={setMode} className="navLinks" />
    </div>
  );
}

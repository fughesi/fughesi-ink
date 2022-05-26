import React from "react";
import { Link } from "react-router-dom";
import MonkeyHead from "./../../images/portraits/MonkeyHead";
import Etsy from "./../../images/Icons/etsy";
import FB from "./../../images/Icons/FB2";
import IG from "./../../images/Icons/IG2";
import WA from "./../../images/Icons/WA";
import "./NavbarBig.css";

export default function Navbar({ offsetY }) {
  console.log(offsetY);
  return (
    <>
      <nav className={offsetY > 0 ? "mainNav shadowNav" : "mainNav"}>
        <div className="navDivBig">
          <Link to="/">
            <h3 className={offsetY > 0 ? "fughesiInk big" : "fughesiInk"}>FUGHESI Ink</h3>
          </Link>

          <ul className={offsetY > 0 ? "navBigUL" : "navBigULBig"}>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/graphics">GRAPHICS</Link>
            </li>
            <li>
              <Link to="/FAQ">FAQ</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>

          <MonkeyHead
            className={offsetY > 0 ? "monkeyHead" : "monkeyHeadBig"}
          />
        </div>
      </nav>
    </>
  );
}

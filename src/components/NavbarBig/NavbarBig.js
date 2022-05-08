import React from "react";
import { Link } from "react-router-dom";
import MonkeyHead from "./../../images/portraits/MonkeyHead";
import Etsy from "./../../images/Icons/etsy";
import FB from "./../../images/Icons/FB2";
import IG from "./../../images/Icons/IG2";
import WA from "./../../images/Icons/WA";
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
        // onClick={goToUri}
        target="_blank"
        href="http://facebook.com/fughesiink"
        data-scheme="fb://profile/fughesiink"
        rel="noreferrer noopener"
      >
        <Etsy height="25" className="etsy socials" />
      </a>
      <a
        // onClick={goToUri}
        target="_blank"
        href="http://facebook.com/fughesiink"
        data-scheme="fb://profile/fughesiink"
        rel="noreferrer noopener"
      >
        <FB height="25" className="FB2 socials" />
      </a>
      <a
        // onClick={goToUri}
        target="_blank"
        href="http://facebook.com/fughesiink"
        data-scheme="fb://profile/fughesiink"
        rel="noreferrer noopener"
      >
        <IG height="25" className="IG2 socials" />
      </a>
      <a
        // onClick={goToUri}
        href="https://wa.me/message/PKTZG4VTREDRN1"
        data-scheme="fb://profile/fughesiink"
        target="_blank"
        rel="noreferrer noopener"
      >
        <WA height="25" className="WA socials" />
      </a>

      <MonkeyHead height="70%" className="monkeyHead" />
    </nav>
  );
}

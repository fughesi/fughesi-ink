import React from "react";
import { Link } from "react-router-dom";
import MonkeyHead from "./../../images/portraits/MonkeyHead";
import Etsy from "./../../images/Icons/etsy";
import FB from "./../../images/Icons/FB2";
import IG from "./../../images/Icons/IG2";
import WA from "./../../images/Icons/WA";
import "./NavbarBig.css";

export default function Navbar({ offsetY }) {
  return (
    <>
      <nav className={offsetY > 0 ? "mainNav" : "mainNavBig"}>
        <div className={offsetY > 0 ? "navDiv" : "navDivBig"}>
          <Link to="/">
            <h3 className="fughesiInk">FUGHESI Ink</h3>
          </Link>
        </div>

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
        {/* <div className={offsetY > 0 ? "navDiv" : "navDivBig"}>
        <a
          target="_blank"

          data-scheme="fb://profile/fughesiink"
          rel="noreferrer noopener"
        >
          <Etsy
            height="25"
            className={offsetY > 0 ? "etsy socials" : "etsy socialsBig"}
          />
        </a>
        <a
          target="_blank"

          data-scheme="fb://profile/fughesiink"
          rel="noreferrer noopener"
        >
          <FB height="25" className="FB2 socials" />
        </a>
        <a
          target="_blank"

          data-scheme="fb://profile/fughesiink"
          rel="noreferrer noopener"
        >
          <IG height="25" className="IG2 socials" />
        </a>
        <a
          href="https://wa.me/message/PKTZG4VTREDRN1"

          target="_blank"
          rel="noreferrer noopener"
        >
          <WA height="25" className="WA socials" />
        </a>

        />
      </div> */}
        <MonkeyHead className={offsetY > 0 ? "monkeyHead" : "monkeyHeadBig"} />
      </nav>
    </>
  );
}

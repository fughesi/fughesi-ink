import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ toggler, nav }) {
  return (
    <nav className="mainNav">
      <div className="navDiv">
        <Link to="/">
          <h3 className="fughesiInk">FUGHESI Ink</h3>
        </Link>
        <div className="togDiv" onClick={toggler}>
          <div className="hamburger">
            <div className={nav ? "rotate" : ""}></div>
          </div>
        </div>
      </div>
      <section
        aria-describedby="nav links"
        className={nav ? "NavBG scale" : "NavBG"}
      >
        <ul>
          <li>
            <Link to="/">
              <h2 className="link" onClick={toggler}>
                HOME
              </h2>
            </Link>
          </li>
          <li>
            <Link to="/graphics">
              <h2 className="link" onClick={toggler}>
                GRAPHICS
              </h2>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <h2 className="link" onClick={toggler}>
                ABOUT
              </h2>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <h2 className="link" onClick={toggler}>
                CONTACT
              </h2>
            </Link>
          </li>
        </ul>
      </section>
    </nav>
  );
}

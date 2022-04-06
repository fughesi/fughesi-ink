import React from "react";
import { Link } from "react-router-dom";
import Graphics from "../../images/fonts/Graphics";
import Contact from "../../images/fonts/Contact";
import About from "../../images/fonts/About";
import Home from "../../images/fonts/Home";
import "./Navbar.css";

export default function Navbar({ toggler, nav }) {
  return (
    <nav className="mainNav">
      <div className="navDiv">
        <Link to="/"><h3 className="fughesiInk">FUGHESI Ink</h3></Link>
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
              <Home
                width={100}
                height={55}
                className="link"
                onClick={toggler}
              />
            </Link>
          </li>
          <li>
            <Link to="/graphics">
              <Graphics
                width={100}
                height={55}
                className="link"
                onClick={toggler}
              />
            </Link>
          </li>
          <li>
            <Link to="/about">
              <About
                width={100}
                height={55}
                className="link"
                onClick={toggler}
              />
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <Contact
                width={100}
                height={55}
                className="link"
                onClick={toggler}
              />
            </Link>
          </li>
        </ul>
      </section>
    </nav>
  );
}

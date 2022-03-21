import React from "react";
import { Link } from "react-router-dom";
import Graphics from "../../images/fonts/Graphics";
import Contact from "../../images/fonts/Contact";
import About from "../../images/fonts/About";
import Home from "../../images/fonts/Home";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="mainNav">
      <div className="hamburger">
        <span></span>
      </div>
      <section aria-describedby="nav links" className="NavBG">
        <ul>
          <li>
            <Link to="/">
              <Home width={100} height={55} className="link" />
            </Link>
          </li>
          <li>
            <Link to="/about">
              <About width={100} height={55} className="link" />
            </Link>
          </li>
          <li>
            <Link to="/graphics">
              <Graphics width={100} height={55} className="link" />
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <Contact width={100} height={55} className="link" />
            </Link>
          </li>
        </ul>
      </section>
    </nav>
  );
}

import React, { useState, useEffect } from "react";
import DarkMode from "../../components/DarkMode/DarkMode";
import BackToTop from "../../components/BackToTop/BackToTop";
import { Link } from "react-router-dom";
import "./Graphics.css";

export default function Graphics({ setMode, darkmode, nav }) {
  // state variables
  const [top, setTop] = useState(true);
  const [bottom, setBottom] = useState(!top);
  const [scrollHeight, setScrollHeight] = useState(0);

  //back to the top of the page when clicked
  function pageup() {
    setTop((i) => !i);
    setBottom((b) => !b);
  }

  // click the arrow at bottom of page to go to top
  function scroll() {
    return window.scrollTo(0, 0);
  }

  // find scroll position
  const watchHeight = (event) => {
    setScrollHeight(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", watchHeight);
    return () => {
      window.removeEventListener("scroll", watchHeight);
    };
  }, []);

  return (
    <main className={nav ? "graphicsMain blur" : "graphicsMain"}>
      <ul>
        <li>
          <Link to="/CharicaturesGraphics">Charicatures</Link>
        </li>
        <li>
          <Link to="/PocketGraphics">Pocket</Link>
        </li>
        <li>
          <Link to="/PopArtGraphics">PopArt</Link>
        </li>
        <li>
          <Link to="/PresidentGraphics">Presidents</Link>
        </li>
        <li>
          <Link to="/RandomGraphics">Random</Link>
        </li>
      </ul>

      {scrollHeight > 2750 && (
        <BackToTop
          handleClick={(() => pageup, scroll)}
          top={top}
          bottom={bottom}
        />
      )}
      {/* <DarkMode handleClick={setMode} darkmode={darkmode} /> */}
    </main>
  );
}

import React, { useState, useEffect } from "react";
import "./Graphics.css";
import Portfolio1 from "../../components/Portfolio/CharicatureIMG/CharicatureIMG";
import Portfolio2 from "../../components/Portfolio/RandomIMG/RandomIMG";
import Portfolio3 from "../../components/Portfolio/PocketIMG/PocketIMG";
import Portfolio4 from "../../components/Portfolio/PopArtIMG/PopArtIMG";
import DarkMode from "../../components/DarkMode/DarkMode";
import BackToTop from "../../components/BackToTop/BackToTop";

export default function Graphics({ setMode, darkmode, nav }) {
  // state variables
  const [top, setTop] = useState(true);
  const [bottom, setBottom] = useState(!top);
  const [scrollHeight, setScrollHeight] = useState(window.scrollY);

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
      {/* <div className="topPlaceholder">FUGHESI Ink</div> */}
      <Portfolio1 top={top} bottom={bottom} />
      <Portfolio2 top={top} bottom={bottom} />
      <Portfolio3 top={top} bottom={bottom} />
      <Portfolio4 top={top} bottom={bottom} />

      {scrollHeight > 2750 && (
        <BackToTop
          handleClick={(() => pageup, scroll)}
          top={top}
          bottom={bottom}
        />
      )}
      <DarkMode handleClick={setMode} darkmode={darkmode} />
    </main>
  );
}

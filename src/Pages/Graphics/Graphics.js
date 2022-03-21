import React, { useState, useEffect } from "react";
import "./Graphics.css";
import Portfolio from "../../components/Portfolio/CharicatureIMG/CharicatureIMG";
import BackToTop from "../../components/BackToTop/BackToTop";

export default function Graphics() {
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
    <main className="graphicsMain">
      <div className="topPlaceholder">FUGHESI Ink</div>
      <Portfolio top={top} bottom={bottom} />
      {scrollHeight > 2500 && (
        <BackToTop
          handleClick={(() => pageup, scroll)}
          top={top}
          bottom={bottom}
        />
      )}
    </main>
  );
}

import React, { useState, useEffect } from "react";
import BackButton from "../../BackButton/BackButton";
import Photos from "../../../PhotoPresidentJSON";
import DarkMode from "../../DarkMode/DarkMode";
import BackToTop from "../../BackToTop/BackToTop";
import "./PresidentIMG.css";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";

function Portfolio({ setMode, darkmode, nav }) {
  // state variables
  const [top, setTop] = useState(true);
  const [bottom, setBottom] = useState(!top);
  const [scrollHeight, setScrollHeight] = useState(window.scrollY);

  //back to the top of the page when clicked
  function pageup() {
    setTop((i) => !i);
    setBottom((b) => !b);
  }

  // map over the photoJSON file for all the graphics
  const photoArr = Photos.map((i) => {
    return (
      <div>
        <LazyLoadImage key={i.id} id={i.id} src={i.src} alt={i.alt} />
        <p className="nameIMG">{i.name}</p>
      </div>
    );
  });

  //make sure the page loads from the top
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

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

  // click the arrow at bottom of page to go to top
  function scroll() {
    return window.scrollTo(0, 0);
  }

  return (
    <section
      aria-labelledby="president graphics"
      className={`${nav ? "portfolio blur" : "portfolio"} ${
        darkmode ? "portfolio darkModeOn" : "portfolio"
      }`}
    >
      {photoArr}
      {scrollHeight > 2750 && (
        <BackToTop
          handleClick={(() => pageup, scroll)}
          top={top}
          bottom={bottom}
        />
      )}
      <BackButton />
      <DarkMode handleClick={setMode} darkmode={darkmode} />
    </section>
  );
}

export default trackWindowScroll(Portfolio);

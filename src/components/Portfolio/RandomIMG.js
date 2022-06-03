import Photos from '../../JSON/PhotoRandomJSON';
import React, { useState, useEffect } from "react";
import Top from "../top/BackToTop";
import "./_Portfolio.css";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";

function Portfolio({ darkmode, nav }) {
  // ---------- state variables ---------------------
  const [top, setTop] = useState(true);
  const [bottom, setBottom] = useState(!top);
  const [scrollHeight, setScrollHeight] = useState(window.scrollY);

  // ---------------- back to the top of the page when clicked -----------------
  function pageup() {
    setTop((i) => !i);
    setBottom((b) => !b);
  }

  // ------- map over the photoJSON file for all the graphics --------
  const photoArr = Photos.map((i) => {
    return (
      <div className="photoElement">
        <LazyLoadImage
          key={i.id}
          id={i.id}
          src={i.src}
          alt={i.alt}
          className="graphic"
        />
        {/* <div> */}
        {/* <ShoppingCart key={i.id} id={i.id} src={i.src} alt={i.alt} />exit */}
        <p className="nameIMG">{i.name}</p>
        {/* </div> */}
      </div>
    );
  });

  // -------- find scroll position ---------------
  const watchHeight = (event) => {
    setScrollHeight(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", watchHeight);
    return () => {
      window.removeEventListener("scroll", watchHeight);
    };
  }, []);

  // --------- click the arrow at bottom of page to go to top --------
  function scroll() {
    return window.scrollTo(0, 0);
  }

  return (
    <section
      aria-labelledby="graphics"
      className={`${nav ? "portfolio blur" : "portfolio"} ${
        darkmode ? "portfolio darkModeOn" : "portfolio"
      }`}
    >
      {photoArr}
      {scrollHeight > 3000 && (
        <Top handleClick={(() => pageup, scroll)} top={top} bottom={bottom} />
      )}
    </section>
  );
}

export default trackWindowScroll(Portfolio);

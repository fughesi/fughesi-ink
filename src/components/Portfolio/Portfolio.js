import React, { useState, useEffect } from "react";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import Photos from "../../PhotoJSON";
import "./Portfolio.css";

function Portfolio() {
  // map over the photoJSON file for all the graphics
  const photoArr = Photos.map((i) => {
    return (
      <div>
        <LazyLoadImage
          effect="blur"
          key={i.id}
          id={i.id}
          src={i.src}
          alt={i.alt}
          // scrollPosition={scrollPosition}
        />
        <p>{i.name}</p>
      </div>
    );
  });

  //make sure the page loads from the top
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <section aria-labelledby="portfolio" className="portfolio">
      {photoArr}
    </section>
  );
}

export default trackWindowScroll(Portfolio);

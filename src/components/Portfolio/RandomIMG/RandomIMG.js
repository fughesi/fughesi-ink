import React, { useEffect } from "react";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import Photos from "../../../PhotoRandomJSON";
import "./RandomIMG.css";

function Portfolio() {
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

  return (
    <section aria-labelledby="president graphics" className="portfolio">
      {photoArr}
    </section>
  );
}

export default trackWindowScroll(Portfolio);

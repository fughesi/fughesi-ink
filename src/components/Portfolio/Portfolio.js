import React, { useState, useEffect } from "react";
import Photos from "../../PhotoJSON";
import "./Portfolio.css";

export default function Portfolio() {
  // map over the photoJSON file for all the graphics
  const photoArr = Photos.map((i) => {
    return (
      <div>
        <img key={i.id} src={i.src} alt={i.alt}></img>
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

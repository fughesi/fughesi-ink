import React, { useEffect } from "react";
import Photos from "../../PhotoJSON";
import "./Portfolio.css";

export default function Portfolio({ top }) {
  // map over the photoJSON file for all the graphics
  const photoArr = Photos.map((i) => {
    return (
      <div>
        <img key={i.id} src={i.src} alt={i.alt}></img>
        <p>{i.name}</p>
      </div>
    );
  });
console.log(top)
  //make sure the page loads from the top
  useEffect(() => {
    window.scroll(0, 0);
  }, [top === true]);

  return <section className="portfolio">{photoArr}</section>;
}

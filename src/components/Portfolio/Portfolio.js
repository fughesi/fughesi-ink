import React from "react";
import Photos from "../../PhotoJSON";
import "./Portfolio.css";

export default function Portfolio() {
  const photoArr = Photos.map((i) => {
    return <img key={i.id} src={i.src} alt={i.name}></img>;
  });

  console.log(photoArr);
  return <section className="portfolio">{photoArr}</section>;
}

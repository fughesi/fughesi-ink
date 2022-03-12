import React from "react";
import Photos from "../../PhotoJSON";
import "./Portfolio.css";

export default function Portfolio() {
  const photoArr = Photos.map((i) => {
    return (
      <div>
        <img key={i.id} src={i.src} alt={i.alt}></img>
        <p>{i.name}</p>
      </div>
    );
  });

  console.log(photoArr);
  return <section className="portfolio">{photoArr}</section>;
}

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import pics from "../../JSON/_generalJSON";
import cartoons from "../../JSON/_cartoonJSON";
import { nanoid } from "nanoid";
import "./inventoryPage.css";

export default function inventoryPage({ blur }) {
  // start position to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ------- create inventory instances ---------------
  function inventory(images) {
    return images.map((i) => {
      return (
        <div className="inventoryCards">
          <Link to={i.link}>
            <img
              src={i.src}
              alt={i.alt}
              key={nanoid()}
              className="carouselLinks"
            />
          </Link>
        </div>
      );
    });
  }

  return (
    <main className={`inventoryPageMain ${blur ? "blur" : ""}`}>
      <div className="inventoryTitle">
        <h1>Select a Graphic</h1>
        <p>click a title below to view</p>
      </div>
      <h3>General collection</h3>
      <div className="inventory">{inventory(pics)}</div>
      <h3>Cartoon collection</h3>
      <div className="inventory">{inventory(cartoons)}</div>
    </main>
  );
}

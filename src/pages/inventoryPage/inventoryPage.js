import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import pics from "../../JSON/_generalJSON";
import cartoons from "../../JSON/_cartoonJSON";
import "./inventoryPage.css";

export default function InventoryPage({ blur }) {
  // start position to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ------- create inventory buttons that lead to graphics categories ---------------
  function inventory(images) {
    return images.map((i, index) => {
      return (
        <div className="inventoryCards">
          <Link to={i.link} key={index}>
            <img
              src={i.src}
              alt={i.alt}
              key={index}
              className="carouselLinks"
            />
          </Link>
        </div>
      );
    });
  }

  return (
    <main className={`inventoryPageMain ${blur ? "blur" : ""}`}>
      
      <section className="inventoryTitle" aria-label="title section">
        <div className="inventoryTitle">
          <h1>Select a Graphic</h1>
          <p>click a title below to view</p>
        </div>
      </section>

      <section  className="scrollImageBTN" aria-label="general image section">
        <h3>General collection</h3>
        <div className="inventory">{inventory(pics)}</div>
      </section>

      <section  className="scrollImageBTN" aria-label="cartoon image section">
        <h3>Cartoon collection</h3>
        <div className="inventory">{inventory(cartoons)}</div>
      </section>

      <Outlet />
    </main>
  );
}

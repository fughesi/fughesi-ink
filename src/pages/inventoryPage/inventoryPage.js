import React, { useEffect } from "react";
import Inventory from "./../../components/inventory/Inventory";
import pics from "../../JSON/_generalJSON";
import stuff from "../../JSON/_cartoonJSON";
import "./inventoryPage.css";

export default function inventoryPage({ blur }) {
  // start position to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={blur ? "inventoryPageMain blur" : "inventoryPageMain"}>
      <div className="inventoryTitle">
        <h1>Select a Graphic</h1>
        <p>click a title below to view</p>
      </div>
      <h3>General collection</h3>
      <Inventory images={pics} />
      <h3>Cartoon collection</h3>
      <Inventory images={stuff} />
    </main>
  );
}

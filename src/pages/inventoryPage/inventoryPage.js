import React, { useEffect } from "react";
import Inventory from "./../../components/inventory/Inventory";
import pics from "../../JSON/_inventoryJSON";
import stuff from "../../JSON/_cartoonJSON";
import "./inventoryPage.css";

export default function inventoryPage({ nav }) {
  // start position to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={nav ? "inventoryPageMain blur" : "inventoryPageMain"}>
      <h3>Good stuff</h3>
      <Inventory images={pics} />
      <h3>Better stuff</h3>
      <Inventory images={stuff} />
    </main>
  );
}

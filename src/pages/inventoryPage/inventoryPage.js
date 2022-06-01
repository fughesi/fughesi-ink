import React, { useEffect } from "react";
import Inventory from "./../../components/inventory/Inventory";
import "./inventoryPage.css";

export default function inventoryPage({ nav }) {
  // start position to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={nav ? "inventoryPageMain blur" : "inventoryPageMain"}>
      <Inventory />
    </main>
  );
}

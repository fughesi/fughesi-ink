import React from "react";
import "./BackToTop.css";

export default function BackToTop({top, handleClick}) {

  console.log( top)

  return (
    <main className="UpArrow" onClick={handleClick}>
      <a className="arrow-icon" >
        <span className={top ? "left-bar open" : "left-bar"}></span>
        <span className={top ? "right-bar open" : "right-bar"}></span>
      </a>
    </main>
  );
}

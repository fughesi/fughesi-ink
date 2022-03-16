import React from "react";
import "./BackToTop.css";

export default function BackToTop({ top, handleClick }) {
  console.log(top)
  return (
    <div className="UpArrow" onClick={handleClick}>
      <a className="arrowIcon">
        <span className={top ? "leftBar open" : "leftBar"}></span>
        <span className={top ? "rightBar open" : "rightBar"}></span>
      </a>
      <p className="tops">BACK TO TOP</p>
    </div>
  );
}

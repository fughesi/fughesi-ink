import React from "react";
import "./BackToTop.css";

export default function BackToTop({ handleClick }) {
  return (
    <div className="UpArrow" onClick={handleClick}>
      <div className="backToTop">BACK TO TOP</div>
      <div className="buttonBlur"></div>
    </div>
  );
}

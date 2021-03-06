import React from "react";
import "./BackToTop.css";

export default function BackToTop({ handleClick }) {
  return (
    <div className="topButton" onClick={handleClick}>
      <div className="backToTop">BACK TO TOP</div>
    </div>
  );
}

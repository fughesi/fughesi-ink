import React from "react";
import "./Footer.css";
import Tshirt from "../../images/Icons/Tshirt";
import Heart from "../../images/Icons/Heart";

export default function Footer() {
  return (
    <footer className="footer">
      <div></div>
      <div className="iconGroup">
        <Tshirt width={20} className="shirtIcon" />
        +
        <Heart width={16} className="heartIcon" />
      </div>
      <p className="copyright">
        Fughesi.ink{" "}
        <span>
          <sup>{"\u00A9"}</sup>2022
        </span>
      </p>
    </footer>
  );
}

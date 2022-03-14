import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="copyright">
        Fughesi.ink{" "}
        <span>
          <sup>{"\u00A9"}</sup>2022
        </span>
      </p>

      <div className="socials">
        {/* <i className="fa-brands fa-facebook-square 2x"></i>
        <i className="fa-brands fa-instagram"></i> */}
      </div>
    </footer>
  );
}

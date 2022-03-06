import React from "react";
import "./Socials.css";
import Facebook from "../../images/Facebook";
import Instagram from "../../images/Instagram";
import Pinterest from "../../images/Pinterest";

export default function Socials() {
  return (
    <main id="socialsMain">
      <div className="socialsContainer">
        <a href="#"><Facebook /></a>
        <a href="#"><Pinterest /></a>
        <a href="#"><Instagram /></a>
      </div>
    </main>
  );
}

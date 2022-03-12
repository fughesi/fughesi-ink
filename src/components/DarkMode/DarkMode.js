import React, { useState } from "react";
import "./DarkMode.css";

export default function DarkMode({ darkmode, handleClick }) {
  return (
    <section className="stickyPosition">
      <main className="darkModeContainer">
        <p className={darkmode ? "Dtext" : "Ltext"}>
          {darkmode ? "Dark Mode" : "Light Mode"}
        </p>
        <div onClick={handleClick} className={darkmode ? "dark" : "light"}>
          <i className="fas fa-moon"></i>
          <i className="fas fa-sun"></i>
          <div className={`ball ${darkmode ? "on" : "off"}`}></div>
        </div>
      </main>
    </section>
  );
}

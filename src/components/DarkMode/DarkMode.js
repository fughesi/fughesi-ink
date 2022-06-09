import React from "react";
import "./DarkMode.css";

export default function DarkMode({ darkmode, setMode }) {
  return (
    <div className="stickyPosition" onClick={setMode}>
      <p className={darkmode ? "Dtext" : "Ltext"}>
        {darkmode ? "Dark Mode" : "Light Mode"}
      </p>
      <div
        className={darkmode ? "toggleBall dark on" : "toggleBall light"}
      >
        <div className={`ball ${darkmode ? "on" : "off"}`}></div>
      </div>
    </div>
  );
}

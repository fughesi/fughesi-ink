import React, { useState } from "react";
import Moon from "../../images/Icons/Moon"
import Sun from "../../images/Icons/Sun"
import "./DarkMode.css";

export default function DarkMode({ darkmode, handleClick }) {
  return (
    <div className="stickyPosition">
      <div className="darkModeContainer">
        <p className={darkmode ? "Dtext" : "Ltext"}>
          {darkmode ? "Dark Mode" : "Light Mode"}
        </p>
        <div onClick={handleClick} className={darkmode ? "dark" : "light"}>
          <Moon width={15} fill={"#f7c800"}/>
          <Sun width={18} fill={"#fff802"} />
          <div className={`ball ${darkmode ? "on" : "off"}`}></div>
        </div>
      </div>
    </div>
  );
}

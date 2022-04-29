import React from "react";
import monkeyHead from "./../../images/portraits/monkeyFace.png"
import "./Thanks.css";

export default function Thanks() {
  return (
    <main className="thanksMain">
      <div className="thanksCard">
          <img src={monkeyHead} alt="logo" />
        <h2>Thank you</h2>
      </div>
    </main>
  );
}

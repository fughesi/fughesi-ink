import React, { useState, useEffect } from "react";
import "./Splash.css";
import MonkeyHead from "./../../images/portraits/monkeyFace3D.png";

export default function Splash() {
  const [splash, setSplash] = useState(false);

  // sets timer for splash screen
  useEffect(() => {
    setSplash(true);
    setTimeout(() => setSplash(false), 4500);
  }, []);

  return (
    <>
      {splash && (
        <main className="splashMain">
          <img src={MonkeyHead} className="monkey" />
          <h1 className="fughesi fugSplash">FUGHESI</h1>
          <h1 className="fughesi inkSplash">ink</h1>
        </main>
      )}
    </>
  );
}

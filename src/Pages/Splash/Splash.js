import React, { useState, useEffect } from "react";
import "./Splash.css";
import MonkeyHead from "./../../images/portraits/monkeyFace3D.png";

export default function Splash() {
  const [splash, setSplash] = useState(false);

  // sets timer for splash screen
  useEffect(() => {
    setSplash(true);
    setTimeout(() => setSplash(false), 4000);
  }, []);

  return (
    <>
      {splash && (
        <main className="splashMain">
          <img src={MonkeyHead} className="monkey" />
        </main>
      )}
    </>
  );
}

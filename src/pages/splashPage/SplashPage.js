import React, { useState, useEffect } from "react";
import "./SplashPage.css";
import Logo from './../../resources/logos/MonkeyHead'


export default function Splash() {
  const [splash, setSplash] = useState(false);

  // sets timer for splash screen
  useEffect(() => {
    setSplash(true);
    setTimeout(() => setSplash(false), 2000);
  }, []);

  return (
    <>
      {splash && (
        <main className="splashMain">
          <Logo className="monkey" /> 
          <h1 className="fughesi fugSplash">FUGHESI</h1>
          <h1 className="fughesi inkSplash">ink</h1>
        </main>
      )}
    </>
  );
}
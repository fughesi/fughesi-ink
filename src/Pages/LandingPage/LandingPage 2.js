import React, { useState, useEffect } from "react";
import "./LandingPage.css";

export default function LandingPage({ nav }) {
  // state variables
  const [offsetY, setOffsetY] = useState(0);

  // callback function to get page location in Y axis
  const handleScroll = () => setOffsetY(window.pageYOffset);

  // parallax effect
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // window to start at top of page on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={nav ? "mainLandingPage blur" : "mainLandingPage"}>
      <section aria-describedby="top landing page" className="topLandingPage">
        <h1>
          <em style={{ transform: `translateY(${offsetY * 0.1}px)` }}>
            Welcome to
          </em>{" "}
          <span
            data-fill-text="FUGHESI"
            className="fug hoverFill"
            style={{ transform: `translateY(${offsetY * 0.5}px)` }}
          >
            FUGHESI
          </span>{" "}
          <span
            className="dot"
            style={{
              transform: `translateY(${offsetY * 0.5}px) rotate(-45deg)`,
            }}
          >
            dot
          </span>
          <span
            data-fill-text="INK"
            className="ink hoverFill"
            style={{ transform: `translateY(${offsetY * 0.5}px)` }}
          >
            INK
          </span>
        </h1>
        <div
          className="colorsDiv"
          style={{ transform: `translateY(${offsetY * 0.6}px)` }}
        >
          <p>a custom graphics T-shirt and apparel company!</p>

          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>

      <section aria-describedby="info cards"></section>
    </main>
  );
}

// className={arrowsGone < 1 ? "welcome" : "none"}

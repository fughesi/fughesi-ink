import React, { useState, useEffect } from "react";
import IG from "../../images/Icons/IG";
import FB from "../../images/Icons/FB";
import Cards from "../../components/Cards/Cards";
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
          <em style={{ transform: `translateY(${offsetY * 0.15}px)` }}>
            Welcome to
          </em>{" "}
          <span
            data-fill-text="FUGHESI"
            className="fug hoverFill"
            style={{ transform: `translateY(${offsetY * 0.20}px)` }}
          >
            FUGHESI
          </span>{" "}
          <span
            className="dot"
            style={{
              transform: `translateY(${offsetY * 0.25}px) rotate(-45deg)`,
            }}
          >
            dot
          </span>
          <span
            data-fill-text="INK"
            className="ink hoverFill"
            style={{ transform: `translateY(${offsetY * 0.3}px)` }}
          >
            INK
          </span>
        </h1>

        <div
          className="colorsDiv"
          style={{ transform: `translateY(${offsetY * 0.35}px)` }}
        >
          <p>a custom graphics T-shirt and apparel company!</p>

          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>

      <section className="cards" aria-describedby="info cards">
        <Cards />
      </section>

      <section className="info" aria-labelledby="information">
        <div className="infoLeft">
          <h2>Your Business On The Web</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            repudiandae perspiciatis sed
          </p>
          <a href="#" className="btn">
            Learn More
          </a>
        </div>
        <div className="infoRight">
          <div className="tooltip">
            <span className="tooltipText">Follow on Instagram</span>
            <a href="https://www.instagram.com/fughesi/" target="_blank">
              <IG width={50} />
            </a>
          </div>

          <div className="tooltip">
            <span className="tooltipText">Follow on Facebook</span>
            <a href="https://www.facebook.com/fughesiInk" target="_blank">
              <FB width={50} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

// className={arrowsGone < 1 ? "welcome" : "none"}

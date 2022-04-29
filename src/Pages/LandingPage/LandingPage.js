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
        {/* <img src={MonkeyHead} alt="monkeyhead logo" width="150"/> */}
        <h1>
          <em style={{ transform: `translateY(${offsetY * 0.15}px)` }}>
            Welcome to
          </em>{" "}
          <span
            data-fill-text="FUGHESI"
            className="fug hoverFill"
            style={{ transform: `translateY(${offsetY * 0.2}px)` }}
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
          <h2>Connect with FUGHESI ink</h2>
          <p>
            Click on the social icons to follow our journey and to see updated
            photos/vides, message us about custom orders, or just say "Hi"
          </p>
        </div>
        <div className="infoRight">
          <div className="tooltip">
            <span className="tooltipText">Follow on Instagram</span>
            <a
              href="https://www.instagram.com/fughesi/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IG width={50} />
            </a>
          </div>

          <div className="tooltip">
            <span className="tooltipText">Follow on Facebook</span>
            <a
              href="https://www.facebook.com/fughesiInk"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FB width={50} />
            </a>
          </div>
        </div>
        <div className="whatsApp">
          {/* {" "}
          <a href="sms://+18138489006?body=I%27m%20interested%20in%20your%20product.%20Please%20contact%20me.">
            Send an SMS message
          </a> */}
          <a
            href="https://wa.me/message/PKTZG4VTREDRN1"
            target="_blank"
            rel="noreferrer noopener"
          >
            Message via WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}

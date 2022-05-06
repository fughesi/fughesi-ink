import React, { useState, useEffect } from "react";
import MonkeyHead from "./../../images/portraits/MonkeyHead";
import Ready from "./../../images/portraits/ready.jpg";
import FB2 from "../../images/Icons/FB2";
import IG2 from "../../images/Icons/IG2";
import WA from "../../images/Icons/WA";
import Etsy from "../../images/Icons/etsy";
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

  // links to socials
  function intent(event) {
    // tries to execute the uri:scheme
    function goToUri(uri, href) {
      event.preventDefault();
      let start, end, elapsed;

      // start a timer
      start = new Date().getTime();

      // attempt to redirect to the uri:scheme
      // the lovely thing about javascript is that it's single threadded.
      // if this WORKS, it'll stutter for a split second, causing the timer to be off
      document.location = uri;

      // end timer
      end = new Date().getTime();

      elapsed = end - start;

      // if there's no elapsed time, then the scheme didn't fire, and we head to the url.
      if (elapsed < 1) {
        document.location = href;
      }
    }
  }

  return (
    <main className={nav ? "mainLandingPage blur" : "mainLandingPage"}>
      <section aria-describedby="top landing page" className="topLandingPage">
        <MonkeyHead width="75" opacity=".5" />
        <h1>
          <em style={{ transform: `translateY(${offsetY * 0.05}px)` }}>
            Welcome to
          </em>{" "}
          <span
            data-fill-text="FUGHESI"
            className="fug hoverFill"
            style={{ transform: `translateY(${offsetY * 0.075}px)` }}
          >
            FUGHESI
          </span>{" "}
          <span
            className="dot"
            style={{
              transform: `translateY(${offsetY * 0.1}px) rotate(-45deg)`,
            }}
          >
            dot
          </span>
          <span
            data-fill-text="INK"
            className="ink hoverFill"
            style={{ transform: `translateY(${offsetY * 0.15}px)` }}
          >
            INK
          </span>
        </h1>

        <div
          className="colorsDiv"
          style={{ transform: `translateY(${offsetY * 0.2}px)` }}
        >
          <p>a custom graphics T-shirt and apparel company!</p>

          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {/* <img src={Ready} alt="model with tattoos" width="350" className="ready"/> */}
      </section>

      <section className="cards" aria-describedby="info cards">
        <Cards />
      </section>

      <section className="info" aria-labelledby="information and socials">
        <div className="infoLeft">
          <h2>Connect with FUGHESI ink</h2>
          <p>
            Click on the social icons to follow our journey and to see updated
            photos/videos, inquire about custom orders, or just say "Hi"
          </p>
        </div>
        <div className="infoRight">
          <div className="tooltip">
            <span className="tooltipText">ETSY store</span>
            <a
              onClick={intent}
              target="_blank"
              href="http://facebook.com/fughesiink"
              data-scheme="fb://profile/fughesiink"
              rel="noreferrer noopener"
            >
              <Etsy width={50} />
            </a>
          </div>
          <div className="tooltip">
            <span className="tooltipText">Follow on Facebook</span>
            <a
              onClick={intent}
              target="_blank"
              href="http://facebook.com/fughesiink"
              data-scheme="fb://profile/fughesiink"
              rel="noreferrer noopener"
            >
              <FB2 width={50} />
            </a>
          </div>

          <div className="tooltip">
            <span className="tooltipText">Follow on Instagram</span>
            <a
              onClick={intent}
              target="_blank"
              href="http://facebook.com/fughesiink"
              data-scheme="fb://profile/fughesiink"
              rel="noreferrer noopener"
            >
              <IG2 width={50} />
            </a>
          </div>
          <div className="tooltip">
            <span className="tooltipText">Message on WhatsApp</span>
            <a
              onClick={intent}
              target="_blank"
              href="https://wa.me/message/PKTZG4VTREDRN1"
              data-scheme="fb://profile/fughesiink"
              rel="noreferrer noopener"
            >
              <WA width={50} />
            </a>
          </div>
        </div>
        <div className="whatsApp">
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

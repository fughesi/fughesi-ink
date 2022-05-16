import React, { useState, useEffect } from "react";
import MonkeyHead from "./../../images/portraits/MonkeyHead";
import FB2 from "../../images/Icons/FB2";
import IG2 from "../../images/Icons/IG2";
import WA from "../../images/Icons/WA";
import Etsy from "../../images/Icons/etsy";
import Cards from "../../components/Cards/Cards";
import "./LandingPage.css";

export default function LandingPage({ nav, offsetY, handleScroll }) {
  // window to start at top of page on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

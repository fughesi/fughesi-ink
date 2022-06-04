import React, { useEffect } from "react";
import FB from "./../../resources/icons/FB";
import IG from "./../../resources/icons/IG";
import WA from "./../../resources/icons/WA";
import Etsy from "./../../resources/icons/Etsy";
// import Video from "./../../resources/videos/girlWalkSlow.mp4";
// import Video from "./../../resources/videos/inkVideoLQ.mov";
// import Video from "./../../resources/videos/inkDrip.mp4";
import "./indexPage.css";

export default function indexPage({ nav, offsetY }) {
  // start position to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={nav ? "indexMain blur" : "indexMain"}>
      <section aria-describedby="index page" className="topLandingPage">
        {/* <div className="overlay"></div> */}
        {/* <video src={Video} autoPlay loop muted className="videoBG" /> */}
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
              <FB width={50} />
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
              <IG width={50} />
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

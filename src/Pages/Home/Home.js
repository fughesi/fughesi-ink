import React, { useState, useEffect } from "react";
import Cards from "../../components/Cards/Cards";
import Info from "../../components/Info/Info";
import IG from "../../images/Icons/IG";
import FB from "../../images/Icons/FB";
import "./Home.css";

export default function Home() {
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
    <main className="homeMain">
      {/* <div className="recolorBG"></div> */}
      <section className="hero" aria-labelledby="primary landing page">
        <p className="welcome">Welcome to</p>

        <h1
          className="fughesi"
          style={{ transform: `translateY(${offsetY * 0.25}px)` }}
        >
          FUGHESI <span className="dot">dot</span> ink
        </h1>

        <a
          href="#"
          className="btn"
          style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        >
          Read More
        </a>
      </section>

      <div className="topbox topboxA multiply">
        <h4>Membership</h4>
        <p className="price">$199/mo</p>
        <a href="#" className="btn">
          Buy Now
        </a>
      </div>
      <div className="topbox topboxB multiply">
        <h4>Pro Membership</h4>
        <p className="price">$299/mo</p>
        <a href="#" className="btn">
          Buy Now
        </a>
      </div>

      <Cards />
      <Info />
      <IG width={150} />
      <FB width={150} />
    </main>
  );
}

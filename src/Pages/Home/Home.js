import React, { useState, useEffect } from "react";
import ScrollArrow from "../../components/ScrollArrow/ScrollArrow";
import Cards from "../../components/Cards/Cards";
import IG from "../../images/Icons/IG";
import FB from "../../images/Icons/FB";
import "./Home.css";

export default function Home({ nav }) {
  // state variables
  const [offsetY, setOffsetY] = useState(0);
  const [arrowsGone, setArrowsGone] = useState(0);

  // callback function to get page location in Y axis
  function handleScroll() { setOffsetY(window.pageYOffset)}
  // const handleScroll = () => setOffsetY(window.pageYOffset);

  // parallax effect
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // window to start at top of page on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // find scroll position
  const removeArrows = (event) => {
    setArrowsGone(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", removeArrows);
    return () => {
      window.removeEventListener("scroll", removeArrows);
    };
  }, []);
  
  return (
    <main className={nav ? "homeMain blur" : "homeMain"}>
      <section className="hero" aria-labelledby="hero section">
        <p
          className={arrowsGone < 1 ? "welcome" : "none"}
          // style={{ transform: `translateY(${offsetY * 2}px)` }}
        >
          Welcome to
        </p>

        <h1 className="fughesi" data-fill-text="FUGHESI">
          FUGHESI 
        </h1>
        <div className={arrowsGone < 140 ? "arrowBoard" : "invisible"}>
          <ScrollArrow
            style={{ transform: `translateY(${offsetY * 0.95}px)` }}
            // arrowsGone={arrowsGone}
          />
        </div>
      </section>

      <section className="description" aria-labelledby="description">
        <h3>We make T-shirts</h3>
      </section>

      {/* <Cards /> */}
      <section className="info" aria-labelledby="information">
        <div className="infoLeft">
          <h2>Your Business On The Web</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            repudiandae perspiciatis sed adipisci officiis ad delectus nesciunt,
            veniam, ea laborum quo quis repellendus. Odio quas, sequi magni
            natus quos repellat maxime expedita consectetur dolor ipsa
            assumenda, in alias accusamus harum!
          </p>
          <a href="#" className="btn">
            Learn More
          </a>
        </div>
        <div className="infoRight">
          <div className="tooltip">
            <span className="tooltipText">Follow on Instagram</span>
            <a href="https://www.instagram.com/fughesi/" target="_blank">
              <IG width={150} />
            </a>
          </div>

          <div className="tooltip">
            <span className="tooltipText">Follow on Facebook</span>
            <a href="https://www.facebook.com/fughesiInk" target="_blank">
              <FB width={150} />
            </a>
          </div>
        </div>
      </section>


    </main>
  );
}

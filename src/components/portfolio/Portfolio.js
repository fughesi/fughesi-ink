import React, { useState, useEffect } from "react";
import ShoppingCartIcon from "../../resources/icons/Cart";
import AllPhotos from "../../JSON/__photoJSON";
import Top from "../backToTop/BackToTop";
import "./Portfolio.css";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";

function Portfolio({ darkmode, blur, category, addToCart, offsetY }) {
  const [top, setTop] = useState(0); //state variable for scrolling back to top

  // -------------get page location in Y axis  ----- TopScroll
  const TopScroll = () => setTop(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", TopScroll);
    return () => window.removeEventListener("scroll", TopScroll);
  }, []);

  // ---------------- back to the top of the page when clicked -----------------
  function pageup() {
    window.scrollTo(0, 0);
  }

  //  ---------- filters photoJSON based on category ------------
  const selectedPhotos = AllPhotos.filter((i) => i.category === category);

  // ------- map over the selectedPhotos file for all the graphics ----------------
  const photoArr = selectedPhotos.map((i) => {
    return (
      <div className="photoElement">
        <LazyLoadImage
          key={i.id}
          id={i.id}
          src={i.src}
          alt={i.alt}
          className="graphic"
        />
        <p className="nameIMG">{i.name}</p>
        <div onClick={() => addToCart(i)}>
          <ShoppingCartIcon
            key={i.id}
            id={i.id}
            src={i.src}
            alt={i.alt}
            className="cartIcon"
          />
        </div>
      </div>
    );
  });

  // --------- click the arrow at bottom of page to go to top --------
  function scroll() {
    return window.scrollTo(0, 0);
  }

  // ##################  return  ##################
  return (
    <section
      aria-labelledby="graphics"
      className={`portfolio ${blur ? "blur" : ""} ${
        darkmode ? "darkModeOn" : ""
      }`}
    >
      {photoArr}
      {top > 4000 && <Top handleClick={(() => pageup, scroll)} />}
    </section>
  );
}

export default trackWindowScroll(Portfolio);

import React, { useState, useEffect } from "react";
import useLocalStorage from "../../useLocalStorage";
import ShoppingCartIcon from "../../resources/icons/Cart";
import AllPhotos from "../../JSON/__photoJSON";
import Top from "../backToTop/BackToTop";
import "./Portfolio.css";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";

function Portfolio({ darkmode, blur, category }) {
  // ---------- state variables ---------------------
  const [top, setTop] = useState(true);
  const [bottom, setBottom] = useState(!top);
  const [scrollHeight, setScrollHeight] = useState(window.scrollY);
  const [cart, setCart] = useLocalStorage("cart", "");

  // ---------------- back to the top of the page when clicked -----------------
  function pageup() {
    setTop((i) => !i);
    setBottom((b) => !b);
  }

  // ------------------ add item to cart and local storage ----------------
  const addToCart = (item) => {
    setCart([...cart, item]);
    console.log("clicked the thing");
  };

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

  // -------- find scroll position ---------------
  const watchHeight = () => {
    setScrollHeight(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", watchHeight);
    return () => {
      window.removeEventListener("scroll", watchHeight);
    };
  }, []);

  // --------- click the arrow at bottom of page to go to top --------
  function scroll() {
    return window.scrollTo(0, 0);
  }

  // ##################  return  ##################
  return (
    <section
      aria-labelledby="graphics"
      className={`${blur ? "portfolio blur" : "portfolio"} ${
        darkmode ? "darkModeOn" : ""
      }`}
    >
      {photoArr}
      {scrollHeight > 4000 && (
        <Top handleClick={(() => pageup, scroll)}  />
      )}
    </section>
  );
}

export default trackWindowScroll(Portfolio);

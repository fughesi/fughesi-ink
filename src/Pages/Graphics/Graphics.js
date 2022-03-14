import React, { useState, useEffect } from "react";
import Portfolio from "../../components/Portfolio/Portfolio";
import BackToTop from "../../components/BackToTop/BackToTop";

export default function Graphics() {
  // state variables
  const [top, setTop] = useState(true);
  const [bottom, setBottom] = useState(!top);

  let height = document.body.offsetHeight;

  //back to the top of the page when clicked
  function pageup() {
    setTop((i) => !i);
    setBottom((b) => !b);
  }

  // click the arrow at bottom of page to go to top
  function scroll() {
    return window.scrollTo(0, 0);
  }

  // find scroll position
  window.addEventListener("scroll", (event) => {
    let scroll = window.scrollY;
  });
  console.log(scroll);

  return (
    <div>
      <Portfolio top={top} bottom={bottom} />
      {height === 2000 && (
        <BackToTop
          handleClick={(() => pageup, scroll)}
          top={top}
          bottom={bottom}
        />
      )}
    </div>
  );
}
